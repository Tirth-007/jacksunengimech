
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BusinessRelationshipWall from "../components/BusinessRelationshipWall";

const products = [
  { number: "01", name: "Fasteners", detail: "Hot-forged bolts, studs and nuts", type: "MECHANICAL" },
  { number: "02", name: "Valves", detail: "Manual, actuated and pressure-control valves", type: "FLOW CONTROL" },
  { number: "03", name: "Pipe & fittings", detail: "Metallic and non-metallic piping systems", type: "PIPING" },
  { number: "04", name: "Gaskets & sealing", detail: "Gaskets, O-rings and sealing solutions", type: "SEALING" },
  { number: "05", name: "Pumps", detail: "Industrial pumps and pumping solutions", type: "FLUID SYSTEMS" },
  { number: "06", name: "Tools & tackles", detail: "Tools and lifting accessories", type: "EQUIPMENT" },
  { number: "07", name: "Paint equipment", detail: "Industrial painting and coating equipment", type: "COATING" },
  { number: "08", name: "MRO supplies", detail: "Maintenance, repair and operations supplies", type: "MRO" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacksun Engimech — Industrial Supply, Reconsidered</title>
        <meta
          name="description"
          content="Jacksun Engimech supplies industrial products, technical expertise and value-added services to industrial organisations."
        />
        <meta name="theme-color" content="#f0efe9" />
      </Head>

      <main className="jec">
        <SiteHeader currentPage="home" />


        <section className="hero">
          <div className="hero-index">
            <span>INDEPENDENT THINKING.</span>
            <span>INDUSTRIAL PURPOSE.</span>
            <span>EST. 2020</span>
          </div>

          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow">
                A SINGLE SOURCE FOR INDUSTRIAL REQUIREMENTS
              </p>

              <h1>
                Industry
                <br />
                doesn&apos;t
                <br />
                <span className="outline-word">stand</span>
                <br />
                still<span className="teal-period">.</span>
              </h1>

              <div className="hero-bottom">
                <p className="hero-description">
                  Neither should the way it gets supplied. Industrial
                  products, technical expertise and value-added services, brought together by Jacksun Engimech.
                </p>

                <div className="hero-actions">
                  <Link href="/quote" className="button-dark">
                    Tell us what you need <span>↗</span>
                  </Link>
                  <Link href="/products" className="text-link">
                    Explore products <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hero-art" aria-label="Abstract industrial engineering artwork">
              <div className="art-topline">
                <span>FIG. 001</span>
                <span>FASTENER SYSTEMS</span>
              </div>

              {/* <div className="art-grid" /> */}


              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />

              <div className="art-disc">
                <div className="disc-inner">
                  <div className="disc-core" />
                </div>
              </div>
              {/* <div className="hero-artwork__image-wrap"> */}
              <img
                className="hero-artwork__image disc-core"
                src="/assets/metallicboltsandnuts.png"
                alt="Industrial fasteners and bolts"
              />
              {/* </div> */}

              <div className="art-bar bar-one" />
              <div className="art-bar bar-two" />
              <div className="art-bar bar-three" />



              <div className="hero-artwork hero-artwork--photo">
                {/* <div className="hero-artwork__label hero-artwork__label--top">
                  <span>01 / MANUFACTURING</span>
                  <p>Built around requirements</p>
                </div>

                <div className="hero-artwork__label hero-artwork__label--bottom">
                  <span>02 / SUPPLY</span>
                  <p>Industrial components</p>
                </div>

                <div className="hero-artwork__footer">
                  <span>ENGINEERED FOR INDUSTRY</span>
                  <span>↗</span>
                </div> */}

                {/* <div className="hero-artwork__meta">
                  <span>FIG. 001</span>
                  <span>FASTENER SYSTEMS</span>
                </div> */}


                <div className="art-coordinate">23° 01&apos; N / 72° 34&apos; E</div>

                <div className="art-caption">
                  <span>THE BIGGER PICTURE</span>
                  <span>↓</span>
                </div>

                <div className="art-annotation annotation-one">
                  <span>01 / MANUFACTURING</span>
                  <span>Built around requirements</span>
                </div>

                <div className="art-annotation annotation-two">
                  <span>02 / SUPPLY</span>
                  <span>Industrial components</span>
                </div>
              </div>


              {/* <div className="hero-artwork hero-artwork--photo">
                <div className="hero-artwork__meta">
                  <span>FIG. 001</span>
                  <span>FASTENER SYSTEMS</span>
                </div>

                <div className="hero-artwork__image-wrap">
                  <img
                    className="hero-artwork__image"
                    src="/assets/metallicboltsandnuts.png"
                    alt="Industrial fasteners and bolts"
                  />
                </div>

                <div className="hero-artwork__label hero-artwork__label--top">
                  <span>01 / MANUFACTURING</span>
                  <p>Fastener manufacturing</p>
                </div>

                <div className="hero-artwork__label hero-artwork__label--bottom">
                  <span>02 / SUPPLY</span>
                  <p>Industrial components</p>
                </div>

                <div className="hero-artwork__footer">
                  <span>ENGINEERED FOR INDUSTRY</span>
                  <span>↗</span>
                </div>
              </div> */}

            </div>
          </div>

          <div className="hero-foot">
            <span>ONE-STOP SOLUTION UNDER ONE ROOF</span>
            <span>QUALITY / DELIVERY / VALUE</span>
            <span>01 — 04</span>
          </div>
        </section>

        <section className="manifesto" id="about">
          <div className="section-label">
            <span>01</span>
            <span>THE JEC APPROACH</span>
          </div>

          <div className="manifesto-content">
            <h2>
              Not just products.
              <br />
              <span>A better way to</span>
              <br />
              keep industry moving.
            </h2>

            <div className="manifesto-aside">
              <span className="plus-mark">+</span>
              <p>
                Since 2020, Jacksun Engimech has positioned itself as a
                single-window engineering supply partner for industrial
                organisations.
              </p>
              <Link href="/about" className="text-link">
                Discover JEC <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="principles">
            <div>
              <span>01</span>
              <h3>Quality</h3>
              <p>Products selected with the application in mind.</p>
            </div>
            <div>
              <span>02</span>
              <h3>On-time delivery</h3>
              <p>A core commitment in JEC&apos;s positioning.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Cost-effective</h3>
              <p>Practical solutions for industrial requirements.</p>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-label">
            <span>02</span>
            <span>THE PRODUCT UNIVERSE</span>
            <span>08 CATEGORIES</span>
          </div>

          <div className="products-heading">
            <h2>
              Many moving
              <br />
              <span>parts.</span> One partner.
            </h2>
            <p>
              From individual fasteners to industrial flow-control
              equipment, explore the categories JEC supplies.
            </p>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <Link
                href={`/products/${product.number === "01" ? "fasteners" :
                  product.number === "02" ? "valves" :
                    product.number === "03" ? "pipe-fittings" :
                      product.number === "04" ? "gaskets-sealing" :
                        product.number === "05" ? "pumps" :
                          product.number === "06" ? "tools-tackles" :
                            product.number === "07" ? "industrial-paint-equipment" :
                              "mro-supplies"}`}
                className="product-row"
                key={product.number}
              >
                <span className="product-number">{product.number}</span>
                <span className="product-type">{product.type}</span>
                <span className="product-name">{product.name}</span>
                <span className="product-detail">{product.detail}</span>
                <span className="product-arrow">↗</span>
              </Link>
            ))}
          </div>

          <div className="catalogue-footer">
            <span>ENGINEERED AROUND YOUR REQUIREMENT.</span>
            <Link href="/products" className="button-dark">
              View all categories <span>↗</span>
            </Link>
          </div>
        </section>

        <BusinessRelationshipWall />


        {/* Replace the existing .feature-circle element with this markup.
    Keep the surrounding feature-visual, feature-grid, and other labels. */}



        <section className="feature-section">
          <div className="feature-visual">
            <div className="feature-grid" />
            <span className="feature-index">FIELD NOTE / 001</span>
            <div className="feature-circle devilbiss-circle">
              <div className="devilbiss-pigment" aria-hidden="true">
                <i className="pigment-fleck fleck-01" />
                <i className="pigment-fleck fleck-02" />
                <i className="pigment-fleck fleck-03" />
                <i className="pigment-fleck fleck-04" />
                <i className="pigment-fleck fleck-05" />
                <i className="pigment-fleck fleck-06" />
                <i className="pigment-fleck fleck-07" />
                <i className="pigment-fleck fleck-08" />
                <i className="pigment-fleck fleck-09" />
                <i className="pigment-fleck fleck-10" />
                <i className="pigment-fleck fleck-11" />
                <i className="pigment-fleck fleck-12" />
                <i className="pigment-fleck fleck-13" />
                <i className="pigment-fleck fleck-14" />
                <i className="pigment-fleck fleck-15" />
                <i className="pigment-fleck fleck-16" />
                <i className="pigment-fleck fleck-17" />
                <i className="pigment-fleck fleck-18" />
                <i className="pigment-fleck fleck-19" />
                <i className="pigment-fleck fleck-20" />
                <i className="pigment-fleck fleck-21" />
                <i className="pigment-fleck fleck-22" />
                <i className="pigment-fleck fleck-23" />
                <i className="pigment-fleck fleck-24" />
              </div>
              <span className="devilbiss-de">DE</span>
            </div>
            {/* <div className="feature-circle"> */}
            {/* <span>DE</span> */}
            {/* </div> */}
            <div className="feature-large-type">
              BUILT
              <br />
              FOR
              <br />
              INDUSTRY<span>.</span>
            </div>
            <span className="feature-bottom-label">
              AUTHORISED DEALER — DEVILBISS
            </span>
          </div>

          <div className="feature-copy">
            <p className="eyebrow">TECHNICAL EXPERTISE / VALUE-ADDED SERVICES</p>
            <h2>
              The right
              <br />
              details make
              <br />
              <span>the difference.</span>
            </h2>
            <p>
              JEC&apos;s offering extends across industrial products and
              specialised equipment. Its portfolio includes industrial
              painting and coating equipment, with JEC identified in its
              company material as an authorised DeVilbiss dealer.
            </p>
            <Link href="/products/industrial-paint-equipment" className="text-link">
              Explore paint equipment <span>↗</span>
            </Link>
          </div>
        </section>

        {/* <section className="section clients" id="clients">
          <div className="section-label">VALUED CLIENTS</div>

          <div className="clients-heading">
            <h2>
              Serving leading industrial <span>organizations.</span>
            </h2>
            <p>
              Jacksun Engimech works with organizations across industrial
              and engineering applications.
            </p>
          </div>

          <div className="client-wall">
            <div className="client-logo">
              <img src="/assets/clients/01_ingersoll_rand.png" alt="Ingersoll Rand" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/02_jsw_steel.png" alt="JSW Steel" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/03_amns_india.png" alt="AM/NS India" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/04_dresser_rand.png" alt="Dresser-Rand" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/05_larsen_toubro_lt.png" alt="Larsen & Toubro" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/06_gspc_lng.png" alt="GSPC LNG" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/07_texmo.png" alt="Texmo" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/08_haitian_huayuan.png" alt="Haitian Huayuan" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/09_nk_proteins.png" alt="N.K. Proteins" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/10_industrybuying.png" alt="IndustryBuying" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/11_kothari_group.png" alt="Kothari Group" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/12_securamax.png" alt="Securamax" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/13_dishman_carbogen_amcis.png" alt="Dishman Carbogen Amcis" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/14_ratnaflex.png" alt="Ratnaflex" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/15_triovision.png" alt="Triovision" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/16_wd.png" alt="WD" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/17_cadila_pharmaceuticals.png" alt="Cadila Pharmaceuticals" loading="lazy" />
            </div>
            <div className="client-logo">
              <img src="/assets/clients/18_spx_flow.png" alt="SPX FLOW" loading="lazy" />
            </div>
          </div>
        </section> */}


        <section className="quote-section" id="quote">
          <div className="quote-topline">
            <span>03 / YOUR REQUIREMENT</span>
            <span>LET&apos;S GET SPECIFIC</span>
          </div>

          <h2>
            What does your
            <br />
            operation <span>need?</span>
          </h2>

          <div className="quote-bottom">
            <p>
              Tell us what you&apos;re sourcing. Share the product,
              specification or requirement with the JEC team.
            </p>
            <Link href="/quote" className="button-light">
              Start your enquiry <span>↗</span>
            </Link>
          </div>
        </section>

        <footer className="site-footer" id="contact">
          <Link href="/" className="brand footer-brand">
            <span className="brand-symbol">J<span>E</span></span>
            <span className="brand-copy">
              JACKSUN
              <br />
              ENGIMECH
            </span>
          </Link>

          <div className="footer-tagline">
            ONE-STOP SOLUTION
            <br />
            UNDER ONE ROOF.
          </div>

          <div className="footer-contact">
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

          <div className="footer-bottom">
            <span>© JACKSUN ENGIMECH</span>
            <span>ENGINEERING · SURVEYING · SOLUTIONS</span>
            <Link href="/contact">Contact ↗</Link>
          </div>
        </footer>
      </main>
    </>
  );
}




// import Link from 'next/link'
// import SiteLayout from '../components/SiteLayout'
// import products from '../data/products'

// export default function Home() {
//   return <SiteLayout>
//     <section className="hero hero-editorial" id="top"><div className="hero-grid" /><div className="hero-copy"><div className="eyebrow"><span /> ENGINEERING · SURVEYING · SOLUTIONS</div><h1>Industrial supply.<br /><em>Engineered around you.</em></h1><p>Industrial products, technical expertise and value-added services from a one-stop engineering supply partner.</p><div className="hero-actions"><Link className="primary" href="/quote">Send your requirement <span>↗</span></Link><Link className="text-button" href="/products">Explore product solutions <span>→</span></Link></div><div className="hero-trust"><span>QUALITY</span><i /><span>ON-TIME DELIVERY</span><i /><span>COST-EFFECTIVE SOLUTIONS</span></div></div><div className="hero-visual hero-visual-photo"><div className="hero-photo-frame"><img src="/assets/valves.jpg" alt="Industrial valve product" /><div className="photo-index">JEC / 001 <span>PRODUCT SOLUTIONS</span></div></div><div className="floating-label label-one"><span>01</span> One-stop sourcing</div><div className="floating-label label-two"><span>02</span> Technical expertise</div></div><div className="hero-side-note">SINCE<br /><strong>2020</strong></div></section>
//     <section className="intro-strip"><div><span>01</span><strong>Industrial products</strong><p>Eight product groups spanning fasteners, valves, piping, sealing, pumps, tools, paint equipment and MRO.</p></div><div><span>02</span><strong>One-stop solution</strong><p>A single-window approach for diverse industrial procurement requirements.</p></div><div><span>03</span><strong>Long-term relationships</strong><p>Quality, reliability, accountability and customer focus are part of JEC's stated values.</p></div></section>
//     <section className="section home-intro"><div className="section-label">01 / THE JEC APPROACH</div><div className="editorial-split"><h2>Industrial needs are complex.<br /><span>Sourcing should feel clear.</span></h2><div><p className="lead">Jacksun Engimech presents itself as a one-stop engineering supply partner, combining industrial products, technical expertise and value-added services.</p><Link className="underlined-link" href="/about">Get to know JEC <span>↗</span></Link></div></div></section>
//     <section className="product-feature-section"><div className="section-label light">02 / PRODUCT RANGE</div><div className="section-heading-row"><h2>Eight categories.<br /><span>One point of contact.</span></h2><p>Explore the product groups listed in JEC's supplied company material. Product specifications should be confirmed against the actual requirement.</p></div><div className="product-grid product-grid-editorial">{products.map((p, i) => <Link className="product-card" href={`/products/${p.slug}`} key={p.slug}><div className="product-image"><img src={p.image} alt={p.title} loading="lazy" /><span className="product-number">{String(i + 1).padStart(2, '0')}</span><span className="product-arrow">↗</span></div><div className="product-body"><span>{p.tag}</span><h3>{p.title}</h3><b>Explore category <span>→</span></b></div></Link>)}</div><div className="center-action"><Link className="light-outline-button" href="/products">View all product categories <span>↗</span></Link></div></section>
//     <section className="quote-band"><div className="quote-band-mark">“</div><div><div className="section-label">03 / THE VISION</div><h2>To become India's most trusted single-window engineering solutions partner.</h2><p>JEC's stated vision focuses on world-class products, innovative technologies and value-added services.</p></div><Link className="primary" href="/about">Our company <span>↗</span></Link></section>
//     <section className="section home-cta"><div><div className="section-label">04 / START A CONVERSATION</div><h2>Have a requirement?<br /><span>Let's get specific.</span></h2><p>Share the product, specification, quantity or application you have in mind. JEC can review your requirement and respond.</p></div><Link className="primary" href="/quote">Send your requirement <span>↗</span></Link></section>
//   </SiteLayout>
// }



