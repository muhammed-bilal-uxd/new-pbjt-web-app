import Image from "next/image";
import './about.css'

export default function AboutPage() {

  return (
    <>
      <div className="pbjt">
        {/* ── Hero ── */}
        <section className="pbjt__hero">
          <div className="pbjt__heroImage">
            <Image
              src="/images/about/about-01.png"
              alt="Hero"
              fill
            />
          </div>
          <div className="pbjt__heroText">
            <h1 className="title-shaping">Shaping</h1>
            <h2>
              Place-Based Just Transition
            </h2>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="pbjt__intro center-content">
          <div className="pbjt__copy">
            <h2>No one-size-fits-all approach exists.</h2>
            <p>
              Just Transition often appears in global discussions as a policy
              framework for meeting climate goals, shifting energy systems, or
              channelling green investments.
            </p>
            <p>
              Yet for workers and communities on the ground, it unfolds more
              intimately: in the quiet shifts to daily income, working
              conditions, ebb and flow of access to essential resources, and
              dignity that holds it all together.
            </p>
            <p>
              <strong>
                Who carries the cost of transition, and who decides how it
                happens?
              </strong>
            </p>
            <p>
              Across most value chains, the heaviest burdens fall on those at
              the last tier: informal workers, MSMEs, vendors, and marginalised
              communities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pbjt__images">
              <Image
                alt=""
                src="/images/about/about-02.png"
                fill
              />

            </div>
            <div className="pbjt__images">
              <Image
                alt=""
                src="/images/about/about-03.png"
                fill
              />
            </div>
          </div>
        </section>

        {/* ── Pull quote ── */}
        <section className="pbjt__question text-center">
          <p>
            A Place-Based Just Transition begins with a simple but critical
            question:
          </p>
          <strong>
            Who carries the cost of transition, and who decides how it happens?
          </strong>
        </section>

        {/* ── "What is?" banner ── */}
        <section className="pbjt__what relative h-[500px] full-content">
          <Image
            className="what-image what-image-1"
            src="/images/about/about-05.png"
            alt=""
            fill
          />
          <Image
            className="what-image what-image-2"
            src="/images/about/about-05.png"
            alt=""
            fill
          />
          <div>
            <h2>
              What is<span>?</span>
            </h2>
            <h3>Place-Based Just Transition</h3>
          </div>
        </section>

        {/* ── Definition ── */}
        <section className="pbjt__definition">
          <div className="pbjt__definitionCopy">
            <h2>
              Place-Based Just Transition (PBJT)
              <br />
              is an approach to sustainability that
              <br />
              starts from the ground up.
            </h2>

            <p>
              PBJT recognises that environmental change and economic transition
              are not abstract ideas. They are lived every day in villages,
              neighbourhoods, worksites, and local production clusters.
            </p>

            <p>
              PBJT focuses on how workers, MSMEs, vendors, informal labour, and
              communities experience climate action, sustainability policies, and
              business practices.
            </p>

            <blockquote>
              A transition can only be called &ldquo;green&rdquo; when it also
              protects people.
            </blockquote>
          </div>

          <div className="pbjt__diagram">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/about/about-04.png"
                alt=""
                fill
              />
              <Image
                src="/images/about/about-05.png"
                alt=""
                fill
              />
            </div>

            <div className="pbjt__redbox mt-3">
              <h3>PBJT ensures that the shift to greener economies:</h3>
              <p>Protects both people and the planet</p>
              <p>Strengthens local livelihoods</p>
              <p>Builds resilient and responsible local economic ecosystems</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
