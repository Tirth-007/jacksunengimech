    
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const pipeMaterials = [
  {
    number: "01",
    name: "Mild steel",
    detail: "Metallic piping requirements for specified industrial applications.",
  },
  {
    number: "02",
    name: "Stainless steel",
    detail: "Stainless steel piping requirements based on application and specifications.",
  },
  {
    number: "03",
    name: "HDPE",
    detail: "High-density polyethylene piping requirements.",
  },
  {
    number: "04",
    name: "PVC / UPVC",
    detail: "Polyvinyl chloride piping options for specified requirements.",
  },
  {
    number: "05",
    name: "CPVC",
    detail: "Chlorinated PVC piping requirements for the intended application.",
  },
];

export default function PipeFittingsPage() {
  return (
    <>
      <Head>
        <title>Pipe &amp; Fittings | Jacksun Engimech</title>
        <meta
          name="description"
          content="Explore pipe and fitting material categories offered by Jacksun Engimech, including mild steel, stainless steel, HDPE, PVC, UPVC and CPVC."
        />
      </Head>

      <main className="jec pipes-page">
        <SiteHeader currentPage="products" />

        <div className="pipes-topline">
          <Link href="/products" className="pipes-breadcrumb-link">
            <span aria-hidden="true">←</span>
            <span>PRODUCTS</span>
          </Link>
          <span>/</span>
          <span>03 — PIPE &amp; FITTINGS</span>
          <span className="pipes-established">EST. 2020</span>
        </div>

        <section className="pipes-hero">
          <div className="pipes-hero-copy">
            <p className="eyebrow">PIPING SYSTEMS / 003</p>

            <h1>
              Every
              <br />
              connection
              <br />
              <span>matters.</span>
            </h1>

            <p className="pipes-intro">
              Explore metallic and non-metallic pipe and fitting
              material categories for industrial requirements.
              Share your application and specifications with
              Jacksun Engimech to discuss your sourcing needs.
            </p>

            <div className="pipes-actions">
              <Link href="/quote" className="button-dark">
                Discuss your requirement <span>↗</span>
              </Link>

              <Link href="#pipe-range" className="text-link">
                Explore materials <span>↘</span>
              </Link>
            </div>

            <div className="pipes-hero-caption">
              <span>PIPING / 01—05</span>
              <span>MATERIAL OPTIONS</span>
            </div>
          </div>

          <div className="pipes-hero-visual">
            <div className="pipes-visual-grid" />

            <div className="pipes-visual-top">
              <span>FIG. 003</span>
              <span>PIPING &amp; CONNECTIONS</span>
            </div>

            <div className="pipes-diagram" aria-hidden="true">
              <div className="pipes-ring pipes-ring-one" />
              <div className="pipes-ring pipes-ring-two" />
              <div className="pipes-ring pipes-ring-three" />

              <div className="pipes-joint">
                <div className="pipes-joint-inner">
                  <span>PF</span>
                </div>
              </div>

              <div className="pipes-line pipes-line-one" />
              <div className="pipes-line pipes-line-two" />
              <div className="pipes-line pipes-line-three" />
            </div>

            <div className="pipes-annotation pipes-annotation-one">
              <span>01 / MATERIAL</span>
              <p>Metallic &amp; non-metallic</p>
            </div>

            <div className="pipes-annotation pipes-annotation-two">
              <span>02 / REQUIREMENT</span>
              <p>Application-led sourcing</p>
            </div>

            <div className="pipes-visual-bottom">
              PIPES / FITTINGS / MATERIAL OPTIONS
            </div>
          </div>
        </section>

        <section className="pipes-info-strip">
          <div>
            <span>01 / CATEGORY</span>
            <strong>Pipes &amp; fittings</strong>
          </div>
          <div>
            <span>02 / MATERIALS</span>
            <strong>Metallic &amp; non-metallic</strong>
          </div>
          <div>
            <span>03 / APPROACH</span>
            <strong>Requirement-led sourcing</strong>
          </div>
        </section>

        <section className="pipes-range" id="pipe-range">
          <div className="pipes-section-label">
            <span>01</span>
            <span>THE MATERIAL RANGE</span>
            <span>05 MATERIAL GROUPS</span>
          </div>

          <div className="pipes-range-heading">
            <h2>
              Different materials.
              <br />
              <span>One connection.</span>
            </h2>

            <p>
              JEC's company profile identifies metallic and
              non-metallic pipe and fitting materials. The
              appropriate option depends on the application
              and confirmed product specifications.
            </p>
          </div>

          <div className="pipes-type-list">
            {pipeMaterials.map((item) => (
              <div className="pipes-type-row" key={item.number}>
                <span className="pipes-type-number">
                  {item.number}
                </span>

                <h3>{item.name}</h3>

                <p>{item.detail}</p>

                <span className="pipes-type-mark" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="pipes-custom">
          <div className="pipes-custom-label">
            <span>02 / YOUR APPLICATION</span>
            <span>SPECIFY THE REQUIREMENT</span>
          </div>

          <h2>
            Start with
            <br />
            <span>the right details.</span>
          </h2>

          <div className="pipes-custom-bottom">
            <p>
              Tell JEC what you need for your project.
              Share the intended application, material
              preference, nominal size, connection type,
              operating conditions and any available
              drawings or technical documents.
            </p>

            <Link href="/quote" className="button-light">
              Discuss your application <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="pipes-notes">
          <p className="eyebrow">TECHNICAL NOTE / 003</p>

          <h2>
            Specify before
            <br />
            you source.
          </h2>

          <p>
            If available, include the material, dimensions,
            required length, fitting or connection type,
            applicable standard and operating conditions.
            These details help JEC understand your enquiry.
          </p>

          <Link href="/quote" className="button-dark">
            Request a quotation <span>↗</span>
          </Link>

          <p className="pipes-disclaimer">
            Specific pipe schedules, dimensions, pressure
            ratings, standards, certifications and product
            availability have not been established on this
            page. Confirm these details and technical
            suitability with JEC before ordering.
          </p>
        </section>

        <div className="pipes-back-link">
          <Link href="/products">← Back to all products</Link>
          <span>JACKSUN ENGIMECH / PIPE &amp; FITTINGS</span>
        </div>
      </main>
    </>
  );
}
