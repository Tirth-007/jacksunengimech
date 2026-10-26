
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const valveTypes = [
  {
    number: "01",
    name: "Manual valves",
    detail: "Manual operation for flow-control requirements.",
  },
  {
    number: "02",
    name: "Actuated valves",
    detail: "Actuated valve solutions for specified applications.",
  },
  {
    number: "03",
    name: "Pressure-control valves",
    detail: "Valve solutions for pressure-control requirements.",
  },
];

export default function ValvesPage() {
  return (
    <>
      <Head>
        <title>Valves | Jacksun Engimech</title>
        <meta
          name="description"
          content="Explore Jacksun Engimech's valve category, including manual, actuated and pressure-control valves."
        />
      </Head>

      <main className="jec valves-page">
        <SiteHeader currentPage="products" />

        <div className="valves-topline">
          <Link
            href="/products"
            className="valves-breadcrumb-link"
          >
            <span aria-hidden="true">←</span>
            <span>PRODUCTS</span>
          </Link>
          <span>/</span>
          <span>02 — VALVES</span>
          <span className="valves-established">EST. 2020</span>
        </div>

        <section className="valves-hero">
          <div className="valves-hero-copy">
            <p className="eyebrow">FLOW CONTROL / 002</p>

            <h1>
              Control
              <br />
              the <span>flow.</span>
              <br />
              Define the
              <br />
              <span>direction.</span>
            </h1>

            <p className="valves-intro">
              Explore valve solutions for manual operation,
              actuation and pressure-control requirements.
              Share your application and specifications with
              Jacksun Engimech to discuss your needs.
            </p>

            <div className="valves-actions">
              <Link href="/quote" className="button-dark">
                Discuss your requirement <span>↗</span>
              </Link>

              <Link href="#valve-range" className="text-link">
                Explore valve range <span>↘</span>
              </Link>
            </div>

            <div className="valves-hero-caption">
              <span>VALVES / 01—03</span>
              <span>FLOW CONTROL</span>
            </div>
          </div>

          <div className="valves-hero-visual">
            <div className="valves-visual-grid" />

            <div className="valves-visual-top">
              <span>FIG. 002</span>
              <span>FLOW CONTROL SYSTEMS</span>
            </div>

            <div className="valves-diagram">
              <div className="valves-ring valves-ring-one" />
              <div className="valves-ring valves-ring-two" />
              <div className="valves-ring valves-ring-three" />

              <div className="valves-core">
                <span>V</span>
                <small>02 / 03</small>
              </div>

              <div className="valves-pipe valves-pipe-one" />
              <div className="valves-pipe valves-pipe-two" />
            </div>

            <div className="valves-annotation valves-annotation-one">
              <span>01 / OPERATION</span>
              <p>Manual control</p>
            </div>

            <div className="valves-annotation valves-annotation-two">
              <span>02 / APPLICATION</span>
              <p>Flow and pressure</p>
            </div>

            <div className="valves-visual-bottom">
              MANUAL / ACTUATED / PRESSURE CONTROL
            </div>
          </div>
        </section>

        <section className="valves-info-strip">
          <div>
            <span>01 / CATEGORY</span>
            <strong>Industrial valves</strong>
          </div>
          <div>
            <span>02 / OPERATION</span>
            <strong>Manual & actuated</strong>
          </div>
          <div>
            <span>03 / FUNCTION</span>
            <strong>Pressure control</strong>
          </div>
        </section>

        <section className="valves-range" id="valve-range">
          <div className="valves-section-label">
            <span>01</span>
            <span>THE VALVE RANGE</span>
            <span>03 APPLICATION GROUPS</span>
          </div>

          <div className="valves-range-heading">
            <h2>
              Flow has a
              <br />
              <span>purpose.</span>
            </h2>

            <p>
              JEC's Products page identifies manual,
              actuated and pressure-control valves.
              Discuss your operating conditions and
              required specifications with the team.
            </p>
          </div>

          <div className="valves-type-list">
            {valveTypes.map((item) => (
              <div className="valves-type-row" key={item.number}>
                <span className="valves-type-number">
                  {item.number}
                </span>

                <h3>{item.name}</h3>

                <p>{item.detail}</p>

                <span className="valves-type-mark">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="valves-custom">
          <div className="valves-custom-label">
            <span>02 / YOUR APPLICATION</span>
            <span>SPECIFY THE REQUIREMENT</span>
          </div>

          <h2>
            The right valve
            <br />
            for <span>your process.</span>
          </h2>

          <div className="valves-custom-bottom">
            <p>
              Tell JEC what you need the valve to do.
              Include the application, operating conditions,
              required size and any available technical
              documentation so the team can review your
              requirement.
            </p>

            <Link href="/quote" className="button-light">
              Discuss your application <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="valves-notes">
          <p className="eyebrow">TECHNICAL NOTE / 002</p>

          <h2>
            Start with
            <br />
            your specifications.
          </h2>

          <p>
            If available, provide the valve type, connection
            details, size, pressure and temperature
            requirements, operating method and intended
            application. These details help JEC understand
            your enquiry.
          </p>

          <Link href="/quote" className="button-dark">
            Request a quotation <span>↗</span>
          </Link>

          <p className="valves-disclaimer">
            Product models, dimensions, materials, pressure
            ratings and certifications have not been
            specified on the current Products page.
            Confirm availability and technical suitability
            with JEC.
          </p>
        </section>

        {/* <div className="valves-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / VALVES</span>
        </div> */}
        <div className="pipes-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / PIPE &amp; FITTINGS</span>
        </div>
      </main>
    </>
  );
}
