import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const fastenerTypes = [
    {
        number: "01",
        name: "Hex-head bolts",
        detail: "Hot-forged hex-head bolts.",
    },
    {
        number: "02",
        name: "Allen cap & CSK bolts",
        detail: "Allen cap and countersunk bolts.",
    },
    {
        number: "03",
        name: "Threaded studs",
        detail: "Full-thread and half-thread studs.",
    },
    {
        number: "04",
        name: "T-bolts",
        detail: "T-bolts for specified applications.",
    },
    {
        number: "05",
        name: "Square-head bolts",
        detail: "Square-head bolt configurations.",
    },
    {
        number: "06",
        name: "Nylock nuts",
        detail: "Nylock nuts for fastening requirements.",
    },
];

export default function FastenersPage() {
    return (
        <>
            <Head>
                <title>Fasteners | Jacksun Engimech</title>
                <meta
                    name="description"
                    content="Explore Jacksun Engimech's fastener manufacturing range, including hot-forged bolts, studs, T-bolts, square-head bolts and Nylock nuts."
                />
            </Head>

            <main className="jec fasteners-page">
                <SiteHeader currentPage="products" />

                <div className="fasteners-topline">
                    {/* <Link href="/products">PRODUCTS</Link> */}
                    <Link href="/products" className="fasteners-breadcrumb-link">
                        <span aria-hidden="true">←</span>
                        <span>PRODUCTS</span>
                    </Link>
                    <span>/</span>
                    <span>01 — FASTENERS</span>
                    <span className="fasteners-established">
                        EST. 2020
                    </span>
                </div>

                <section className="fasteners-hero">
                    <div className="fasteners-hero-copy">
                        <p className="eyebrow">
                            JEC MANUFACTURING / 001
                        </p>

                        <h1>
                            Made to fit.
                            <br />
                            <span>Built for</span>
                            <br />
                            industry.
                        </h1>

                        <p className="fasteners-intro">
                            From hot-forged bolts to studs and specialised
                            fastening requirements, Jacksun Engimech offers
                            fastener manufacturing with provision for
                            non-standard requirements.
                        </p>

                        <div className="fasteners-actions">
                            <Link
                                href="/quote"
                                className="button-dark"
                            >
                                Discuss your requirement <span>↗</span>
                            </Link>

                            <Link
                                href="#product-range"
                                className="text-link"
                            >
                                Explore product range <span>↘</span>
                            </Link>
                        </div>

                        <div className="fasteners-hero-caption">
                            <span>FASTENERS / 01—06</span>
                            <span>MANUFACTURING</span>
                        </div>
                    </div>

                    <div className="fasteners-hero-visual">
                        <div className="fasteners-visual-grid" />

                        <div className="fasteners-visual-top">
                            <span>FIG. 001</span>
                            <span>FASTENER SYSTEMS</span>
                        </div>

                        <div className="fasteners-orbit">
                            <div className="fasteners-orbit-inner" />
                            <div className="fasteners-orbit-core">
                                <span>F</span>
                                <small>01 / 06</small>
                            </div>
                        </div>

                        <div className="fasteners-axis fasteners-axis-one" />
                        <div className="fasteners-axis fasteners-axis-two" />

                        <div className="fasteners-annotation">
                            <span>01 / MANUFACTURING</span>
                            <p>Built around requirements</p>
                        </div>

                        <div className="fasteners-visual-bottom">
                            HOT-FORGED / CUSTOM REQUIREMENTS
                        </div>
                    </div>
                </section>

                <section className="fasteners-spec-strip">
                    <div>
                        <span>01 / PRODUCT</span>
                        <strong>Industrial fasteners</strong>
                    </div>

                    <div>
                        <span>02 / DIAMETER*</span>
                        <strong>M16–100 mm</strong>
                    </div>

                    <div>
                        <span>03 / LENGTH*</span>
                        <strong>100–1,500 mm</strong>
                    </div>
                </section>

                <section
                    className="fasteners-range"
                    id="product-range"
                >
                    <div className="section-label">
                        <span>01</span>
                        <span>THE PRODUCT RANGE</span>
                        <span>06 LISTED TYPES</span>
                    </div>

                    <div className="fasteners-range-heading">
                        <h2>
                            Every component
                            <br />
                            has a <span>purpose.</span>
                        </h2>

                        <p>
                            Explore the fastener types listed in the JEC
                            company profile. Share your requirements to
                            discuss the appropriate product.
                        </p>
                    </div>

                    <div className="fasteners-type-list">
                        {fastenerTypes.map((item) => (
                            <div
                                className="fasteners-type-row"
                                key={item.number}
                            >
                                <span className="fasteners-type-number">
                                    {item.number}
                                </span>

                                <h3>{item.name}</h3>

                                <p>{item.detail}</p>

                                <span className="fasteners-type-mark">
                                    ↗
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="fasteners-custom">
                    <div className="fasteners-custom-label">
                        <span>02 / CUSTOM REQUIREMENTS</span>
                        <span>BEYOND STANDARD SIZES</span>
                    </div>

                    <h2>
                        Your requirement.
                        <br />
                        <span>Our starting point.</span>
                    </h2>

                    <div className="fasteners-custom-bottom">
                        <p>
                            Need a non-standard fastener? JEC's company
                            material states that non-standard items can
                            be made to customer requirements. Share your
                            dimensions or drawing to start a discussion.
                        </p>

                        <Link
                            href="/quote"
                            className="button-light"
                        >
                            Enquire about custom fasteners <span>↗</span>
                        </Link>
                    </div>
                </section>

                <section className="fasteners-notes">
                    <p className="eyebrow">
                        TECHNICAL NOTE / 001
                    </p>

                    <h2>
                        Have a specification
                        <br />
                        ready?
                    </h2>

                    <p>
                        Include your fastener type, required dimensions,
                        quantity, and any available drawing or technical
                        document when enquiring.
                    </p>

                    <Link href="/quote" className="button-dark">
                        Request a quotation <span>↗</span>
                    </Link>

                    <p className="fasteners-disclaimer">
                        * Dimensions are reproduced from the JEC company
                        poster. Confirm the stated range and units with
                        JEC before using them as a final technical
                        specification.
                    </p>
                </section>

                {/* <div className="fasteners-back-link">
                    <Link href="/products">
                        ← Back to all products
                    </Link>
                    <span>JACKSUN ENGIMECH / FASTENERS</span>
                </div> */}
                <div className="pipes-back-link">
                    <Link href="/products">← Back to all products</Link>
                    <span>JACKSUN ENGIMECH / PIPE &amp; FITTINGS</span>
                </div>
            </main>
        </>
    );
}