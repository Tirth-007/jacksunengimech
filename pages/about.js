
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const values = [
  "Customer-Centric Approach",
  "Integrity & Ethics",
  "Quality Excellence",
  "Innovation & Technology",
  "Technical Expertise",
  "Accountability",
  "Teamwork & Collaboration",
  "On-Time Delivery",
  "Safety & Compliance",
  "Cost-Effective Solutions",
  "Continuous Improvement",
  "Long-Term Customer Relationships",
];

const capabilities = [
  {
    number: "01",
    title: "Industrial products",
    description:
      "A broad supply range covering fasteners, valves, piping, sealing solutions, pumps, tools, paint equipment and MRO supplies.",
  },
  {
    number: "02",
    title: "Technical expertise",
    description:
      "Product-focused support to help customers identify suitable solutions for their industrial requirements.",
  },
  {
    number: "03",
    title: "Value-added services",
    description:
      "A single-window approach that brings products and supporting services together for industrial customers.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About JEC | Jacksun Engimech</title>
        <meta
          name="description"
          content="Discover Jacksun Engimech, an engineering supply partner offering industrial products, technical expertise and value-added services."
        />
      </Head>

      <main className="about-page">
        <SiteHeader currentPage="about" />
        

        <div className="about-page-index">
          <span>COMPANY PROFILE / 001</span>
          <span>EST. 2020</span>
        </div>

        <section className="about-hero">
          <div className="about-hero-copy">
            <p className="about-eyebrow">
              A PARTNER FOR INDUSTRIAL PROGRESS
            </p>

            <h1>
              Industry needs
              <br />
              more than
              <br />
              <span>a supplier.</span>
            </h1>

            <p className="about-intro">
              Jacksun Engimech brings industrial products, technical
              expertise and value-added services together under one roof.
            </p>

            <div className="about-hero-actions">
              <Link href="/#products" className="about-button">
                Explore our products <span>↗</span>
              </Link>
              <Link href="/#contact" className="about-text-link">
                Talk to our team <span>→</span>
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-top">
              <span>FIG. 002</span>
              <span>THE JEC APPROACH</span>
            </div>

            <div className="about-visual-core">
              <div className="about-orbit about-orbit-one" />
              <div className="about-orbit about-orbit-two" />
              <div className="about-core-mark">JE</div>
              <span className="about-axis about-axis-one" />
              <span className="about-axis about-axis-two" />
            </div>

            <div className="about-visual-note">
              <span>ONE PARTNER</span>
              <p>Connected by purpose</p>
            </div>

            <div className="about-visual-bottom">
              <span>PRODUCTS / EXPERTISE / SERVICE</span>
              <span>01 — 03</span>
            </div>
          </div>
        </section>

        <section className="about-manifesto">
          <div className="about-section-label">
            <span>01 / OUR STORY</span>
            <span>THE BIGGER PICTURE</span>
          </div>

          <div className="about-manifesto-grid">
            <h2>
              Not just products.
              <br />
              <span>A better way to</span>
              <br />
              keep industry moving.
            </h2>

            <div className="about-story-copy">
              <span className="about-plus">+</span>
              <p>
                Since 2020, Jacksun Engimech has positioned itself as a
                single-window engineering supply partner for industrial
                organisations in India.
              </p>
              <p>
                Its approach brings a diverse product range together with
                technical expertise and value-added services, with a focus
                on quality, on-time delivery and cost-effective solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="about-capabilities">
          <div className="about-section-label">
            <span>02 / WHAT WE BRING</span>
            <span>THREE CONNECTED ELEMENTS</span>
          </div>

          <div className="about-capabilities-heading">
            <h2>
              One supply partner.
              <br />
              <span>Three ways to add value.</span>
            </h2>
            <p>
              Our offering connects products, knowledge and service
              around the needs of industrial customers.
            </p>
          </div>

          <div className="about-capability-list">
            {capabilities.map((item) => (
              <article className="about-capability" key={item.number}>
                <span className="about-capability-number">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="about-capability-symbol">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-vision">
          <div className="about-vision-side">
            <span>03 / OUR VISION</span>
            <span className="about-vision-symbol">JEC<span>.</span></span>
          </div>

          <div className="about-vision-content">
            <p className="about-eyebrow">LOOKING AHEAD</p>
            <h2>
              To become India&apos;s most trusted
              <span> single-window engineering solutions partner.</span>
            </h2>
            <p className="about-vision-description">
              Delivering world-class products, innovative technologies
              and value-added services.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-section-label">
            <span>04 / OUR CORE VALUES</span>
            <span>12 PRINCIPLES</span>
          </div>

          <div className="about-values-heading">
            <h2>
              What guides
              <br />
              <span>the way we work.</span>
            </h2>
            <p>
              These twelve principles are listed in JEC&apos;s company
              poster as its core values.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div className="about-value" key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{value}</p>
                <span className="about-value-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta" id="contact">
          <div className="about-section-label">
            <span>05 / START A CONVERSATION</span>
            <span>YOUR REQUIREMENT, OUR NEXT STEP</span>
          </div>

          <h2>
            Let&apos;s keep
            <br />
            your industry moving<span>.</span>
          </h2>

          <p>
            Tell us what your operation needs. Start a conversation
            with the JEC team about your industrial requirements.
          </p>

          <Link href="/#contact" className="about-cta-button">
            Tell us what you need <span>↗</span>
          </Link>
        </section>

        <footer className="about-footer">
          {/* <Link href="/" className="about-footer-brand">
            <img src="/assets/logo-tight.png" alt="Jacksun Engimech" />
          </Link> */}
          <div className="brand" aria-label="Jacksun Engimech home">
            <span className="brand-symbol">J<span>E</span></span>
            <span className="brand-copy">
              JACKSUN
              <br />
              ENGIMECH
            </span>
          </div>

          <p>
            ONE-STOP SOLUTION
            <br />
            UNDER ONE ROOF.
          </p>

          <div className="about-footer-contact">
            <span>START A CONVERSATION</span>
            <a href="tel:+917383349795">+91 73833 49795</a>
            <a href="mailto:jacksunengimech@gmail.com">
              jacksunengimech@gmail.com
            </a>
            <a
              href="https://www.instagram.com/jacksunengimech/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>

          <div className="about-footer-bottom">
            <span>© JACKSUN ENGIMECH</span>
            <span>ENGINEERING · SURVEYING · SOLUTIONS</span>
            <Link href="/">Home ↗</Link>
          </div>
        </footer>
      </main>
    </>
  );
}




// import Link from 'next/link'
// import SiteLayout from '../components/SiteLayout'
// import { values } from '../data/products'
// const clients = ['Ingersoll Rand','JSW Steel Limited','AM/NS India','Dresser-Rand','L&T','Texmo','GSPC LNG','Haitian','N.K. Proteks Pvt. Ltd.','Dishman Carbogen Amcis','Kothari Group','SecuraMax','Ratnaflex Engineering Pvt. Ltd.','TrioVision Compute Technologies','SPX Flow','Cadila Pharmaceuticals']
// export default function About(){return <SiteLayout title="About Jacksun Engimech | JEC" description="Learn about Jacksun Engimech, its stated vision, values and industrial supply positioning."><section className="page-hero" id="top"><div className="section-label">ABOUT JEC / 01</div><h1>Engineering supply,<br/><em>built around requirements.</em></h1><p>Jacksun Engimech describes its approach as a one-stop solution under one roof, bringing industrial products, technical expertise and value-added services together.</p><div className="page-hero-meta"><span>EST. 2020</span><span>INDUSTRIAL PRODUCTS</span><span>ENGINEERING SOLUTIONS</span></div></section><section className="section about-detail"><div className="section-label">02 / INTRODUCTION</div><div className="editorial-split"><h2>One partner.<br/><span>Multiple product needs.</span></h2><div><p className="lead">The company profile positions JEC as an engineering supply partner serving industrial organisations.</p><p>Its stated focus includes quality, innovation, technical expertise, operational excellence and long-term customer relationships. The website presents these as company positioning, not as independently audited performance claims.</p><Link className="underlined-link" href="/products">Explore product range ↗</Link></div></div></section><section className="values-section" id="values"><div className="section-label light">03 / CORE VALUES</div><h2>The principles behind<br/><span>the partnership.</span></h2><div className="values-grid">{values.map((v,i)=><div key={v}><span>{String(i+1).padStart(2,'0')}</span><strong>{v}</strong></div>)}</div></section><section className="section clients-section" id="clients"><div className="section-label">04 / VALUED CLIENTS</div><div className="editorial-split"><h2>Industrial names<br/><span>in JEC's profile.</span></h2><p>The supplied company profile includes the organisations listed below. JEC should confirm the permission and preferred presentation of client names and logos before the public launch.</p></div><div className="client-wall">{clients.map(c=><span key={c}>{c}</span>)}</div><p className="fine-print">Client names are reproduced as text for this design iteration; no independent customer relationship claims are added.</p></section><section className="mini-cta"><h2>Looking for a product or solution?</h2><Link className="primary" href="/quote">Send your requirement ↗</Link></section></SiteLayout>}
