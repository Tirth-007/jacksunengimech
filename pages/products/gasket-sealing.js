
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const gasketTypes = [
  {
    number: "01",
    name: "Rubber gaskets",
    detail: "Rubber gasket options for specified sealing requirements.",
  },
  {
    number: "02",
    name: "Spiral-wound gaskets",
    detail: "Spiral-wound gasket solutions for application-led sourcing.",
  },
  {
    number: "03",
    name: "Non-asbestos gaskets",
    detail: "Non-asbestos gasket options for specified applications.",
  },
  {
    number: "04",
    name: "Double-jacketed gaskets",
    detail: "Double-jacketed gasket solutions based on your requirements.",
  },
  {
    number: "05",
    name: "Ring-type gaskets",
    detail: "Ring-type gasket options for defined sealing requirements.",
  },
  {
    number: "06",
    name: "Rubber sheets",
    detail: "Rubber sheet materials for application-specific requirements.",
  },
  {
    number: "07",
    name: "O-rings",
    detail: "O-ring sealing components selected to match your application.",
  },
  {
    number: "08",
    name: "Oil seals",
    detail: "Oil seal options for specified equipment and operating needs.",
  },
];

export default function GasketSealingPage() {
  return (
    <>
      <Head>
        <title>Gasket & Sealing Solutions | Jacksun Engimech</title>
        <meta
          name="description"
          content="Explore Jacksun Engimech's gasket and sealing range, including rubber, spiral-wound, non-asbestos, double-jacketed and ring-type gaskets, rubber sheets, O-rings and oil seals."
        />
      </Head>

      <main className="jec gasket-page">
        <SiteHeader currentPage="products" />

        <div className="gasket-topline">
          <Link href="/products" className="gasket-breadcrumb-link">
            <span aria-hidden="true">←</span>
            <span>PRODUCTS</span>
          </Link>
          <span>/</span>
          <span>04 — GASKET & SEALING</span>
          <span className="gasket-established">EST. 2020</span>
        </div>

        <section className="gasket-hero">
          <div className="gasket-hero-copy">
            <p className="eyebrow">SEALING SYSTEMS / 004</p>

            <h1>
              Every seal
              <br />
              has a <span>purpose.</span>
            </h1>

            <p className="gasket-intro">
              Explore gasket and sealing solutions across a range
              of materials and product types. Share your application
              and specifications with Jacksun Engimech to discuss
              your sourcing requirements.
            </p>

            <div className="gasket-actions">
              <Link href="/quote" className="button-dark">
                Discuss your requirement <span>↗</span>
              </Link>

              <Link href="#gasket-range" className="text-link">
                Explore product range <span>↘</span>
              </Link>
            </div>

            <div className="gasket-hero-caption">
              <span>GASKETS / SEALS / 01—08</span>
              <span>SEALING SOLUTIONS</span>
            </div>
          </div>

          <div className="gasket-hero-visual">
            <div className="gasket-visual-grid" />

            <div className="gasket-visual-top">
              <span>FIG. 004</span>
              <span>GASKET & SEALING SYSTEMS</span>
            </div>

            <div className="gasket-diagram">
              <div className="gasket-ring gasket-ring-one" />
              <div className="gasket-ring gasket-ring-two" />
              <div className="gasket-ring gasket-ring-three" />

              <div className="gasket-core">
                <span>GS</span>
                <small>04 / 08</small>
              </div>

              <div className="gasket-line gasket-line-one" />
              <div className="gasket-line gasket-line-two" />

              <div className="gasket-annotation gasket-annotation-one">
                <span>01 / PRODUCT RANGE</span>
                <p>Gaskets & seals</p>
              </div>

              <div className="gasket-annotation gasket-annotation-two">
                <span>02 / SOURCING</span>
                <p>Application-led selection</p>
              </div>
            </div>

            <div className="gasket-visual-bottom">
              RUBBER / GASKETS / O-RINGS / OIL SEALS
            </div>
          </div>
        </section>

        <section className="gasket-info-strip">
          <div>
            <span>01 / CATEGORY</span>
            <strong>Gaskets & sealing</strong>
          </div>
          <div>
            <span>02 / PRODUCT TYPES</span>
            <strong>Gaskets, sheets & seals</strong>
          </div>
          <div>
            <span>03 / APPROACH</span>
            <strong>Requirement-led sourcing</strong>
          </div>
        </section>

        <section className="gasket-range" id="gasket-range">
          <div className="gasket-section-label">
            <span>01</span>
            <span>THE PRODUCT RANGE</span>
            <span>08 LISTED TYPES</span>
          </div>

          <div className="gasket-range-heading">
            <h2>
              A reliable seal.
              <br />
              <span>A considered choice.</span>
            </h2>

            <p>
              JEC's company profile lists gasket, sheet and sealing
              products across multiple material types. Discuss the
              intended application and required specifications with
              the JEC team.
            </p>
          </div>

          <div className="gasket-type-list">
            {gasketTypes.map((item) => (
              <div className="gasket-type-row" key={item.number}>
                <span className="gasket-type-number">
                  {item.number}
                </span>

                <h3>{item.name}</h3>

                <p>{item.detail}</p>

                <span className="gasket-type-mark">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="gasket-custom">
          <div className="gasket-custom-label">
            <span>02 / YOUR APPLICATION</span>
            <span>START WITH THE REQUIREMENT</span>
          </div>

          <h2>
            Tell us what
            <br />
            needs to <span>seal.</span>
          </h2>

          <div className="gasket-custom-bottom">
            <p>
              Share the equipment or application, preferred product
              type, dimensions and available technical documents.
              These details help JEC understand your requirement
              and discuss suitable sourcing options.
            </p>

            <Link href="/quote" className="button-light">
              Discuss your application <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="gasket-notes">
          <p className="eyebrow">TECHNICAL NOTE / 004</p>

          <h2>
            Specify before
            <br />
            you source.
          </h2>

          <p>
            If available, include the gasket or seal type, material
            requirement, dimensions, equipment details, operating
            conditions and applicable standards. Attach a drawing
            or technical document when possible.
          </p>

          <Link href="/quote" className="button-dark">
            Request a quotation <span>↗</span>
          </Link>

          <p className="gasket-disclaimer">
            Specific materials of construction, dimensions, pressure
            and temperature limits, standards, certifications and
            product availability have not been established on this
            page. Confirm technical suitability and availability
            with JEC before ordering.
          </p>
        </section>

        {/* <div className="gasket-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / GASKET & SEALING</span>
        </div> */}
        <div className="pipes-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / PIPE &amp; FITTINGS</span>
        </div>
      </main>
    </>
  );
}
