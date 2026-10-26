import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const products = [
  {
    number: "01",
    type: "MECHANICAL",
    name: "Fasteners",
    image: "/assets/products/fasteners.png",
    imageAlt: "Fasteners product example",
    detail: "Hot-forged bolts, studs, T-bolts and nuts.",
    href: "/products/fasteners",
  },
  {
    number: "02",
    type: "FLOW CONTROL",
    name: "Valves",
    image: "/assets/products/valves.png",
    imageAlt: "Valves product example",
    detail: "Manual, actuated and pressure-control valves.",
    href: "/products/valves",
  },
  {
    number: "03",
    type: "PIPING",
    name: "Pipe & Fittings",
    image: "/assets/products/pipe-fittings.png",
    imageAlt: "Pipe & Fittings product example",
    detail: "Metallic and non-metallic piping systems.",
    href: "/products/pipe-fittings",
  },
  {
    number: "04",
    type: "SEALING",
    name: "Gasket & Sealing Solutions",
    image: "/assets/products/gasket-sealing.png",
    imageAlt: "Gasket & Sealing Solutions product example",
    detail: "Gaskets, O-rings, rubber sheets and oil seals.",
    href: "/products/gasket-sealing",
  },
  {
    number: "05",
    type: "FLUID SYSTEMS",
    name: "Pumps",
    image: "/assets/products/pumps.png",
    imageAlt: "Pumps product example",
    detail: "Industrial pumps and pumping solutions.",
    href: "/products/pumps",
  },
  {
    number: "06",
    type: "EQUIPMENT",
    name: "Tools & Tackles",
    image: "/assets/products/tools-tackles.png",
    imageAlt: "Tools & Tackles product example",
    detail: "General tools, power tools and lifting accessories.",
    href: "/products/tools-tackles",
  },
  {
    number: "07",
    type: "COATING",
    name: "Industrial Paint Equipment",
    image: "/assets/products/devilbiss-spray-gun.png",
    imageAlt: "Industrial Paint Equipment product example",
    detail: "Painting and coating equipment for industry.",
    href: "/products/industrial-paint-equipment",
  },
  {
    number: "08",
    type: "MRO",
    name: "MRO & General Industrial Supplies",
    image: "/assets/products/mro-general-supplies.png",
    imageAlt: "MRO & General Industrial Supplies product example",
    detail: "Electrical accessories and maintenance products.",
    href: "/products/mro-general-supplies",
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Jacksun Engimech</title>
        <meta
          name="description"
          content="Explore Jacksun Engimech's industrial products, including fasteners, valves, pipe and fittings, sealing solutions, pumps, tools, paint equipment and MRO supplies."
        />
      </Head>

      <main className="jec products-page">
        <SiteHeader currentPage="products" />

        <section className="products-hero">
          <div className="products-hero-index">
            <span>INDUSTRIAL PRODUCTS.</span>
            <span>TECHNICAL EXPERTISE.</span>
            <span>EST. 2020</span>
          </div>

          <div className="products-hero-main">
            <div className="products-hero-copy">
              <p className="eyebrow">
                THE JEC PRODUCT INDEX / 001—008
              </p>

              <h1>
                The right
                <br />
                parts.
                <br />
                <span>One partner.</span>
              </h1>

              <p className="products-hero-description">
                From individual fasteners to industrial equipment,
                explore products and solutions for your operational
                requirements.
              </p>

              <div className="products-hero-actions">
                <Link href="#product-index" className="button-dark">
                  Explore the catalogue <span>↘</span>
                </Link>
                <Link href="/quote" className="text-link">
                  Request a quote <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="products-hero-visual">
              <div className="products-visual-grid" />

              <div className="products-visual-top">
                <span>FIG. 001</span>
                <span>INDUSTRIAL COMPONENTS</span>
              </div>

              <div className="products-visual-orbit">
                <div className="products-visual-core">
                  <span>JEC</span>
                  <small>PRODUCTS</small>
                </div>
              </div>

              <div className="products-visual-line products-visual-line-one" />
              <div className="products-visual-line products-visual-line-two" />

              <div className="products-visual-note products-note-one">
                <span>01 / SOURCING</span>
                <p>Industrial requirements</p>
              </div>

              <div className="products-visual-note products-note-two">
                <span>02 / EXPERTISE</span>
                <p>Product-focused support</p>
              </div>

              <div className="products-visual-bottom">
                EIGHT CATEGORIES / ONE PARTNER
              </div>
            </div>
          </div>

          <div className="products-hero-bottomline">
            <span>INDUSTRIAL PURPOSE.</span>
            <span>BUILT AROUND YOUR REQUIREMENT.</span>
          </div>
        </section>

        <section
          className="products-section"
          id="product-index"
        >
          <div className="section-label">
            <span>01</span>
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
              Explore JEC's industrial product categories.
              Select a category to learn more about its offering
              or discuss your requirement with the team.
            </p>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <Link
                href={product.href}
                className="product-row"
                key={product.number}
              >
                <span className="product-number">
                  {product.number}
                </span>

                <span className="product-row-image">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading={product.number === "01" ? "eager" : "lazy"}
                    decoding="async"
                  />
                </span>

                <span className="product-type">
                  {product.type}
                </span>

                <span className="product-name">
                  {product.name}
                </span>

                <span className="product-detail">
                  {product.detail}
                </span>

                <span className="product-arrow">↗</span>
              </Link>
            ))}
          </div>

          <div className="catalogue-footer">
            <span>ENGINEERED AROUND YOUR REQUIREMENT.</span>

            <Link href="/quote" className="button-dark">
              Discuss your requirement <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="products-feature-section">
          <div className="products-feature-visual">
            <div className="products-feature-grid" />

            <div className="products-feature-top">
              <span>FIELD NOTE / 001</span>
              <span>INDUSTRIAL COATING</span>
            </div>

            <div className="products-feature-mark">
              <span>DE</span>
            </div>

            <div className="products-feature-type">
              BUILT
              <br />
              FOR
              <br />
              INDUSTRY<span>.</span>
            </div>

            <div className="products-feature-bottom">
              AUTHORISED DEALER — DEVILBISS
            </div>
          </div>

          <div className="products-feature-copy">
            <p className="eyebrow">
              SPECIALISED EQUIPMENT / 007
            </p>

            <h2>
              The right
              <br />
              tools for
              <br />
              <span>the job.</span>
            </h2>

            <p>
              Jacksun Engimech identifies itself in its company
              material as an authorised DeVilbiss dealer, offering
              painting and coating equipment for industrial
              applications.
            </p>

            <Link
              href="/products/industrial-paint-equipment"
              className="text-link"
            >
              Explore paint equipment <span>↗</span>
            </Link>
          </div>
        </section>

        <section className="quote-section products-quote">
          <div className="quote-topline">
            <span>02 / YOUR REQUIREMENT</span>
            <span>LET'S GET SPECIFIC</span>
          </div>

          <h2>
            Looking for
            <br />
            something <span>specific?</span>
          </h2>

          <div className="quote-bottom">
            <p>
              Share the product, specification or custom
              requirement you need. The JEC team can discuss
              the next steps with you.
            </p>

            <Link href="/quote" className="button-light">
              Start an enquiry <span>↗</span>
            </Link>
          </div>
        </section>

        <footer className="site-footer">
          <Link
            href="/"
            className="brand footer-brand"
            aria-label="Jacksun Engimech home"
          >
            <span className="brand-symbol">
              J<span>E</span>
            </span>

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
            <a href="tel:+917383349795">
              +91 73833 49795
            </a>
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
// import SiteLayout from '../../components/SiteLayout'
// import products from '../../data/products'
// export default function Products(){return <SiteLayout title="Industrial Products | Jacksun Engimech" description="Explore Jacksun Engimech's eight industrial product categories."><section className="page-hero" id="top"><div className="section-label">PRODUCTS / 01</div><h1>Industrial products<br/><em>for real requirements.</em></h1><p>Browse the product categories presented in JEC's company material. For a quotation, share the product, specification, quantity and application.</p><div className="page-hero-meta"><span>08 PRODUCT CATEGORIES</span><span>ONE-STOP SOURCING</span><span>ENQUIRY-LED</span></div></section><section className="product-catalogue"><div className="catalogue-top"><div className="section-label">02 / PRODUCT CATALOGUE</div><p>Select a category to review its overview and send a specific enquiry.</p></div><div className="product-grid product-grid-editorial">{products.map((p,i)=><Link className="product-card" href={`/products/${p.slug}`} key={p.slug}><div className="product-image"><img src={p.image} alt={p.title} loading="lazy"/><span className="product-number">{String(i+1).padStart(2,'0')}</span><span className="product-arrow">↗</span></div><div className="product-body"><span>{p.tag}</span><h3>{p.title}</h3><b>View category <span>→</span></b></div></Link>)}</div></section></SiteLayout>}
