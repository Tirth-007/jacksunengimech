
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const selectionFactors = [
  {
    number: "01",
    name: "Application",
    detail:
      "Describe the process or equipment where the pump will be used.",
  },
  {
    number: "02",
    name: "Flow requirement",
    detail:
      "Share the required flow rate and any available operating data.",
  },
  {
    number: "03",
    name: "Pressure & duty",
    detail:
      "Provide the required pressure, operating conditions and duty cycle.",
  },
  {
    number: "04",
    name: "Fluid & installation",
    detail:
      "Identify the fluid, site conditions and available connection details.",
  },
];

export default function PumpsPage() {
  return (
    <>
      <Head>
        <title>Industrial Pumps | Jacksun Engimech</title>
        <meta
          name="description"
          content="Explore industrial pumps and pumping solutions from Jacksun Engimech. Share your application and operating requirements to discuss suitable sourcing options."
        />
      </Head>

      <main className="jec pumps-page">
        <SiteHeader currentPage="products" />

        <div className="pumps-topline">
          <Link href="/products" className="pumps-breadcrumb-link">
            <span aria-hidden="true">←</span>
            <span>PRODUCTS</span>
          </Link>
          <span>/</span>
          <span>05 — PUMPS</span>
          <span className="pumps-established">EST. 2020</span>
        </div>

        <section className="pumps-hero">
          <div className="pumps-hero-copy">
            <p className="eyebrow">FLUID SYSTEMS / 005</p>

            <h1>
              Keep things
              <br />
              <span>moving.</span>
            </h1>

            <p className="pumps-intro">
              Industrial pumps and pumping solutions from trusted
              manufacturers. Jacksun Engimech helps bring your
              equipment requirements into focus, with attention
              to the application, operating conditions and
              required performance.
            </p>

            <div className="pumps-actions">
              <Link href="/quote" className="button-dark">
                Discuss your requirement <span>↗</span>
              </Link>

              <Link href="#pump-selection" className="text-link">
                Explore selection factors <span>↘</span>
              </Link>
            </div>

            <div className="pumps-hero-caption">
              <span>PUMPS / FLUID SYSTEMS / 01—04</span>
              <span>INDUSTRIAL SOLUTIONS</span>
            </div>
          </div>

          <div className="pumps-hero-visual">
            <div className="pumps-visual-grid" />

            <div className="pumps-visual-top">
              <span>FIG. 005</span>
              <span>PUMPING SYSTEMS</span>
            </div>

            <div className="pumps-diagram">
              <div className="pumps-orbit pumps-orbit-one" />
              <div className="pumps-orbit pumps-orbit-two" />
              <div className="pumps-orbit pumps-orbit-three" />

              <div className="pumps-impeller">
                <div className="pumps-impeller-blade pumps-blade-one" />
                <div className="pumps-impeller-blade pumps-blade-two" />
                <div className="pumps-impeller-blade pumps-blade-three" />
                <div className="pumps-impeller-blade pumps-blade-four" />
                <div className="pumps-impeller-hub">P</div>
              </div>

              <div className="pumps-flow-line pumps-flow-line-one" />
              <div className="pumps-flow-line pumps-flow-line-two" />

              <div className="pumps-annotation pumps-annotation-one">
                <span>01 / SYSTEM</span>
                <p>Fluid movement</p>
              </div>

              <div className="pumps-annotation pumps-annotation-two">
                <span>02 / SELECTION</span>
                <p>Application-led</p>
              </div>
            </div>

            <div className="pumps-visual-bottom">
              APPLICATION / OPERATING DATA / REQUIREMENT
            </div>
          </div>
        </section>

        <section className="pumps-info-strip">
          <div>
            <span>01 / CATEGORY</span>
            <strong>Industrial pumps</strong>
          </div>
          <div>
            <span>02 / SOURCING</span>
            <strong>Trusted manufacturers</strong>
          </div>
          <div>
            <span>03 / APPROACH</span>
            <strong>Requirement-led solutions</strong>
          </div>
        </section>

        <section className="pumps-range" id="pump-selection">
          <div className="pumps-section-label">
            <span>01</span>
            <span>START WITH THE REQUIREMENT</span>
            <span>04 SELECTION FACTORS</span>
          </div>

          <div className="pumps-range-heading">
            <h2>
              The right solution
              <br />
              starts with <span>the process.</span>
            </h2>

            <p>
              Pump selection depends on the work the system must
              perform. Sharing clear operating details helps JEC
              understand the requirement and discuss suitable
              sourcing options with you.
            </p>
          </div>

          <div className="pumps-factor-list">
            {selectionFactors.map((item) => (
              <div className="pumps-factor-row" key={item.number}>
                <span className="pumps-factor-number">
                  {item.number}
                </span>

                <h3>{item.name}</h3>

                <p>{item.detail}</p>

                <span className="pumps-factor-mark">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pumps-custom">
          <div className="pumps-custom-label">
            <span>02 / YOUR APPLICATION</span>
            <span>FROM REQUIREMENT TO SOURCING</span>
          </div>

          <h2>
            Tell us what
            <br />
            needs to <span>move.</span>
          </h2>

          <div className="pumps-custom-bottom">
            <p>
              Tell us what the pump needs to do, where it will
              operate and what performance you require. If
              available, include a datasheet, equipment model,
              drawing or existing pump details to help clarify
              your enquiry.
            </p>

            <Link href="/quote" className="button-light">
              Discuss your application <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="pumps-notes">
          <p className="eyebrow">TECHNICAL NOTE / 005</p>

          <h2>
            Start with
            <br />
            the operating data.
          </h2>

          <p>
            For a useful enquiry, include the intended application,
            fluid details, required flow rate, pressure or head,
            operating conditions, power supply if relevant, and
            installation constraints. Attach existing pump
            information or technical documentation where possible.
          </p>

          <Link href="/quote" className="button-dark">
            Request a quotation <span>↗</span>
          </Link>

          <p className="pumps-disclaimer">
            Specific pump types, models, capacities, materials,
            performance curves, efficiency figures and certifications
            have not been specified in the supplied company profile.
            Confirm product availability and technical suitability
            with JEC before ordering.
          </p>
        </section>

        <div className="pumps-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / PUMPS</span>
        </div>
      </main>
    </>
  );
}
