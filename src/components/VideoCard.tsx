"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  src: string;
  thumbnail: string;
  title?: string;
  duration?: string;
  className?: string;
  variant?: "default" | "compact";
}

function getYouTubeEmbedUrl(src: string, shouldAutoplay: boolean) {
  try {
    const url = new URL(src);
    const host = url.hostname.replace(/^www\./, "");
    let videoId = "";

    if (host === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") ?? "";
      } else if (
        url.pathname.startsWith("/embed/") ||
        url.pathname.startsWith("/shorts/") ||
        url.pathname.startsWith("/live/")
      ) {
        videoId = url.pathname.split("/").filter(Boolean)[1] ?? "";
      }
    }

    if (!/^[A-Za-z0-9_-]+$/.test(videoId)) {
      return null;
    }

    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
    });

    if (shouldAutoplay) {
      params.set("autoplay", "1");
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  } catch {
    return null;
  }
}

function isYouTubePermissionsError(value: unknown) {
  const message =
    value instanceof Error
      ? value.message
      : typeof value === "string"
        ? value
        : "";

  return (
    message.includes("Failed to execute 'query' on 'Permissions'") ||
    message.includes('Failed to execute "query" on "Permissions"')
  );
}

export default function VideoCard({
  src,
  thumbnail,
  title = "Video",
  duration,
  className = "",
  variant = "default",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [loadedDuration, setLoadedDuration] = useState("00:00");
  const [isEmbedOpen, setIsEmbedOpen] = useState(false);
  const displayDuration = duration ?? loadedDuration;
  const hasYouTubeSource = Boolean(getYouTubeEmbedUrl(src, false));
  const youtubeEmbedUrl = hasYouTubeSource
    ? getYouTubeEmbedUrl(src, isEmbedOpen)
    : null;
  const hasPlayableSource = Boolean(src);
  const playButtonClass =
    variant === "compact" ? "h-10 w-10" : "h-16 w-16";
  const playIconSize = variant === "compact" ? 18 : 28;

  useEffect(() => {
    if (!hasYouTubeSource) return;

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isYouTubePermissionsError(event.reason)) {
        event.preventDefault();
      }
    };

    const handleWindowError = (event: ErrorEvent) => {
      if (
        isYouTubePermissionsError(event.error) ||
        isYouTubePermissionsError(event.message)
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleWindowError);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleWindowError);
    };
  }, [hasYouTubeSource]);

  const formatDuration = (seconds: number) => {
    if (!Number.isFinite(seconds)) return displayDuration;

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  if (youtubeEmbedUrl && isEmbedOpen) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-black shadow-xl ${className}`}
      >
        <iframe
          src={youtubeEmbedUrl}
          title={title}
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (youtubeEmbedUrl || !hasPlayableSource) {
    return (
      <div
        className={`group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-xl ${className}`}
      >
        <img
          src={thumbnail}
          alt={title}
          className="aspect-video w-full object-cover"
        />

        <button
          type="button"
          onClick={() => setIsEmbedOpen(true)}
          disabled={!hasPlayableSource}
          aria-label={
            hasPlayableSource ? `Play ${title}` : `${title} coming soon`
          }
          className={`absolute left-1/2 top-1/2 flex ${playButtonClass} -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ba151d] text-white shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:bg-black/55 disabled:hover:scale-100`}
        >
          <Play size={playIconSize} fill="white" className="ml-1" />
        </button>

        <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
          {hasPlayableSource ? displayDuration : "Soon"}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-xl ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={thumbnail}
        aria-label={title}
        className="aspect-video w-full object-cover"
        controls={false}
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => {
          setLoadedDuration(formatDuration(e.currentTarget.duration));
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={toggleVideo}
        className={`absolute left-1/2 top-1/2 flex ${playButtonClass} -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ba151d] text-white shadow-lg transition-all hover:scale-110`}
      >
        {isPlaying ? (
          <Pause size={playIconSize} fill="white" />
        ) : (
          <Play size={playIconSize} fill="white" className="ml-1" />
        )}
      </button>

      <div className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
        {displayDuration}
      </div>
    </div>
  );
}
