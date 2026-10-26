import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function SiteLayout({ children, title = 'Jacksun Engimech | Engineering & Industrial Supply Solutions', description = 'Industrial products, technical expertise and value-added services from Jacksun Engimech.' }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <>
    <Head><title>{title}</title><meta name="description" content={description} /><meta name="theme-color" content="#12366b" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /></Head>
    <div className="site-shell">
      <header className="nav"><Link href="/" className="brand" aria-label="Jacksun Engimech home" onClick={close}><img src="/assets/logo-tight.png" alt="Jacksun Engimech" /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? '×' : '☰'}</button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <Link href="/about" onClick={close}>About</Link><Link href="/products" onClick={close}>Products</Link><Link href="/about#values" onClick={close}>Values</Link><Link href="/about#clients" onClick={close}>Clients</Link><Link href="/contact" onClick={close}>Contact</Link><Link className="nav-cta" href="/quote" onClick={close}>Request a quote <span>↗</span></Link>
        </nav>
      </header>
      <main className="page-main">{children}</main>
      <footer className="site-footer"><Link href="/" className="footer-brand"><img src="/assets/logo-tight.png" alt="Jacksun Engimech" /></Link><p>Engineering · Surveying · Solutions</p><div className="footer-links"><Link href="/products">Products</Link><Link href="/about">About JEC</Link><Link href="/quote">Request a quote</Link></div><div className="footer-bottom"><span>Since 2020 · Jacksun Engimech</span><span>GST: 24AVZPV4693A1ZX</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  </>
}
