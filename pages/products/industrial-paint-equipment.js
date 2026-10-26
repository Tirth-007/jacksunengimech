
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { motion, useReducedMotion } from "framer-motion";



function PaintHeroArtwork() {
    const reduceMotion = useReducedMotion();

    const logoAnimation = reduceMotion
        ? { opacity: 1, scale: 1 }
        : {
            opacity: [0, 1, 1, 0, 0, 0],
            scale: [0.8, 1, 1, 0.72, 0.72, 0.72],
        };

    const ringAnimation = reduceMotion
        ? { opacity: 1, scale: 1 }
        : {
            opacity: [0, 0, 1, 1, 0, 0],
            scale: [0.9, 0.9, 1, 1, 1, 0.9],
        };

    const gunAnimation = reduceMotion
        ? { opacity: 1, scale: 1, y: 0, rotate: 0 }
        : {
            opacity: [0, 0, 0, 1, 1, 0],
            scale: [0.22, 0.22, 0.22, 1, 1, 0.22],
            y: [18, 18, 18, 0, -3, 18],
            rotate: [0, 0, 0, 0, 0.5, 0],
        };

    const loopTransition = {
        duration: 12,
        times: [0, 0.08, 0.36, 0.48, 0.86, 1],
        repeat: Infinity,
        ease: "easeInOut",
    };

    return (
        <div
            className="paint-hero-visual paint-hero-artwork"
            role="group"
            aria-label="DeVilbiss and JEC dealership identity with industrial spray gun"
        >
            <div className="paint-grid" />

            <div className="paint-visual-top">
                <span>FIG. 007</span>
                <span>COATING SYSTEMS</span>
            </div>

            {/* Phase 1: dealership identity */}

            <div className="paint-logo-stage">
                {/* Combined dealership logo — visible at the start and end of the cycle */}
                
            </div>


            

            <motion.img
                className="paint-combined-dealer-logo"
                src="/assets/devilbiss-jec-combined-logo.png"
                alt="DeVilbiss and Jacksun Engimech authorised-dealer branding"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                animate={logoAnimation}
                transition={loopTransition}
            />

            {/* Phase 2: coloured orbital rings */}
            

            <motion.div
                className="paint-art-rings"
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={ringAnimation}
                transition={loopTransition}
            >
                <span className="paint-art-ring paint-art-ring-one" />
                <span className="paint-art-ring paint-art-ring-two" />
                <span className="paint-art-ring paint-art-ring-three" />
            </motion.div>

            {/* Phase 3: product reveal */}
            {/* Spray gun — enters after the rings appear */}
            
            <motion.img
                className="paint-real-spray-gun"
                src="/assets/products/devilbiss-spray-gun.png"
                alt="Black DeVilbiss industrial spray gun"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.22 }}
                animate={gunAnimation}
                transition={loopTransition}
            />

            <div className="paint-visual-bottom">
                EQUIPMENT / APPLICATION / INDUSTRY
            </div>
        </div>
    );
}

// const heroVariants = {
//     hidden: {opacity: 0, y: 18 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {duration: 0.65, ease: "easeOut" },
//     },
// };

// const gunVariants = {
//     hidden: {opacity: 0, y: 16, rotate: -3 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         rotate: 0,
//         transition: {duration: 0.9, delay: 0.15, ease: "easeOut" },
//     },
// };

const industries = [
    {
        number: "01",
        name: "Manufacturing",
        description: "Painting and coating equipment for manufacturing operations.",
    },
    {
        number: "02",
        name: "Automotive",
        description: "Equipment for painting and coating applications in the automotive industry.",
    },
    {
        number: "03",
        name: "Fabrication",
        description: "Painting and coating equipment for fabrication environments.",
    },
    {
        number: "04",
        name: "Oil & Gas",
        description: "Equipment supporting painting and coating requirements in the oil and gas sector.",
    },
    {
        number: "05",
        name: "Infrastructure",
        description: "Painting and coating equipment for infrastructure-related applications.",
    },
    {
        number: "06",
        name: "Maintenance",
        description: "Equipment for industrial maintenance and coating work.",
    },
];


export default function IndustrialPaintEquipmentPage() {
    // const reduceMotion = useReducedMotion();
    return (
        <>
            <Head>
                <title>Industrial Paint Equipment | Jacksun Engimech</title>
                <meta
                    name="description"
                    content="Explore industrial painting and coating equipment from Jacksun Engimech, a DeVilbiss dealer serving manufacturing, automotive, fabrication, oil and gas, infrastructure, and maintenance industries."
                />
            </Head>

            <main className="jec paint-page">
                <SiteHeader currentPage="products" />

                <div className="paint-breadcrumb">
                    <Link href="/products">PRODUCTS</Link>
                    <span>/</span>
                    <span>07 — INDUSTRIAL PAINT EQUIPMENT</span>
                    <span className="paint-established">EST. 2020</span>
                </div>

                <section className="paint-hero">
                    <div className="paint-hero-copy">
                        <p className="eyebrow">
                            JEC INDUSTRIAL SUPPLIES / 007
                        </p>

                        <h1>
                            Precision
                            <br />
                            in every
                            <br />
                            <span>coating.</span>
                        </h1>

                        <p className="paint-intro">
                            Painting and coating equipment for industrial
                            applications. Jacksun Engimech supplies
                            equipment for a range of industries, with
                            DeVilbiss identified in the company profile.
                        </p>

                        <div className="paint-hero-actions">
                            <Link href="/quote" className="button-dark">
                                Discuss your requirement <span>↗</span>
                            </Link>

                            <Link href="#paint-industries" className="text-link">
                                Explore applications <span>↓</span>
                            </Link>
                        </div>

                        <div className="paint-hero-caption">
                            <span>PAINTING / COATING / EQUIPMENT</span>
                            <span>INDUSTRIAL APPLICATIONS</span>
                        </div>
                    </div>

                    <PaintHeroArtwork />
                    {/* <motion.div
                        className="paint-hero-visual paint-hero-artwork"
                        variants={heroVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        role="group"
                        aria-label="DeVilbiss spray gun and JEC authorised-dealer branding"
                    >
                        <div className="paint-grid" />

                        <div className="paint-visual-top">
                            <span>FIG. 007</span>
                            <span>COATING SYSTEMS</span>
                        </div>

                        <div className="paint-art-rings" aria-hidden="true">
                            <span className="paint-art-ring paint-art-ring-one" />
                            <span className="paint-art-ring paint-art-ring-two" />
                            <span className="paint-art-ring paint-art-ring-three" />
                        </div>

                        <motion.img
                            className="paint-real-spray-gun"
                            src="/assets/products/devilbiss-spray-gun.png"
                            alt="DeVilbiss industrial spray gun"
                            variants={gunVariants}
                            animate={
                                reduceMotion
                                    ? { y: 0, rotate: 0 }
                                    : {
                                        y: [0, -5, 0],
                                        rotate: [0, 0.6, 0],
                                    }
                            }
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : {
                                        duration: 5.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }
                            }
                        />

                        <motion.img
                            className="paint-combined-dealer-logo"
                            src="/assets/devilbiss-jec-combined-logo.png"
                            alt="DeVilbiss and Jacksun Engimech authorised-dealer branding"
                            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: 0.25 }}
                        />

                        <div className="paint-visual-bottom">
                            EQUIPMENT / APPLICATION / INDUSTRY
                        </div>
                    </motion.div> */}
                </section>

                <section className="paint-info-strip">
                    <div>
                        <span>01 / CATEGORY</span>
                        <strong>Paint equipment</strong>
                    </div>

                    <div>
                        <span>02 / BRAND</span>
                        <strong>DeVilbiss dealer</strong>
                    </div>

                    <div>
                        <span>03 / APPLICATION</span>
                        <strong>Painting &amp; coating</strong>
                    </div>
                </section>

                <section className="paint-industries" id="paint-industries">
                    <div className="paint-section-label">
                        <span>01</span>
                        <span>INDUSTRIES SERVED</span>
                        <span>06 APPLICATION AREAS</span>
                    </div>

                    <div className="paint-industries-heading">
                        <h2>
                            Equipment for
                            <br />
                            <span>the work ahead.</span>
                        </h2>

                        <p>
                            Different industries have different painting
                            and coating requirements. Explore the sectors
                            identified in the JEC company material and
                            enquire about equipment for your application.
                        </p>
                    </div>

                    <div className="paint-industry-list">
                        {industries.map((industry) => (
                            <article
                                className="paint-industry-row"
                                key={industry.number}
                            >
                                <span className="paint-industry-number">
                                    {industry.number}
                                </span>

                                <h3>{industry.name}</h3>

                                <p>{industry.description}</p>

                                <span
                                    className="paint-industry-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="paint-brand-section">
                    <div className="paint-brand-index">
                        <span>02 / BRAND REFERENCE</span>
                        <span>INDUSTRIAL PAINT EQUIPMENT</span>
                    </div>

                    <div className="paint-brand-content">
                        <div className="paint-brand-mark">
                            <span>De</span>
                            <span>Vilbiss</span>
                            <i />
                        </div>

                        <div className="paint-brand-copy">
                            <p className="eyebrow">IDENTIFIED IN JEC PROFILE</p>

                            <h2>
                                A brand reference.
                                <br />
                                A requirement to discuss.
                            </h2>

                            <p>
                                JEC's company material identifies the
                                business as a DeVilbiss dealer for painting
                                and coating equipment. Contact JEC to
                                discuss product availability and suitability
                                for your specific application.
                            </p>

                            <Link href="/quote" className="text-link">
                                Enquire about equipment <span>↗</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="paint-enquiry">
                    <div className="paint-enquiry-top">
                        <span>03 / START WITH YOUR APPLICATION</span>
                        <span>INDUSTRIAL SUPPLY</span>
                    </div>

                    <h2>
                        What are you
                        <br />
                        <span>looking to coat?</span>
                    </h2>

                    <div className="paint-enquiry-bottom">
                        <p>
                            Tell us about your industry, intended coating
                            process, operating requirements, and any
                            available product reference. The JEC team can
                            discuss your requirement with you.
                        </p>

                        <Link href="/quote" className="button-light">
                            Request a quotation <span>↗</span>
                        </Link>
                    </div>
                </section>

                <section className="paint-technical-note">
                    <p className="eyebrow">TECHNICAL NOTE / 007</p>

                    <h2>
                        Specify the
                        <br />
                        application first.
                    </h2>

                    <p>
                        When enquiring, include the intended application,
                        coating process, required quantity, operating
                        conditions, and any available product reference
                        or technical specification.
                    </p>

                    <p className="paint-disclaimer">
                        The company profile identifies DeVilbiss dealership
                        and the industries listed on this page. Specific
                        equipment models, product availability, spray
                        technologies, pressure ratings, flow rates,
                        compatibility, and certifications have not been
                        established here. Confirm technical suitability
                        and specifications with JEC before ordering.
                    </p>
                </section>

                <div className="paint-back-link">
                    <Link href="/products">← Back to all products</Link>
                    <span>JACKSUN ENGIMECH / INDUSTRIAL PAINT EQUIPMENT</span>
                </div>
            </main>
        </>
    );
}
