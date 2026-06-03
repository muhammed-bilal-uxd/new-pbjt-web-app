import styles from "./banner.module.css"

const Icon = {
    Pin: () => (
      <svg viewBox="0 0 24 24" aria-hidden="true" style={{width: 12, height: 12}}>
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
          fill="currentColor"
        />
      </svg>
    )
}

export default function BannerTag({name, istransparent=false}) {
    return (
    <div>
      <div className={styles.dpLocator + " "  + (istransparent ? styles.dpLocatorNoBg : "") }>
        <span className={styles.pin}>
          <Icon.Pin />
        </span>
        <span className="capitalize">{name}, India</span>
      </div>
    </div>)
}