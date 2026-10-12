import { useEffect, useState } from 'react'
import { LOGO, LOGO_WHITE, banners, categories, popular, productCats, products, stats, quality, reviews, news, faqs } from './data'

const RED = '#dd0517'
const nav = [
  ['Home', '/'],
  ['Products', '/products', categories.map((c) => [c, '/products?c=' + encodeURIComponent(c)])],
  ['About', '/about'],
  ['Support', '/quality', [['Quality Control', '/quality'], ['FAQ & Service', '/faq']]],
  ['News', '/news'],
  ['Contact Us', '/contact'],
]

function useRoute() {
  const get = () => window.location.hash.slice(1) || '/'
  const [r, setR] = useState(get)
  useEffect(() => {
    const f = () => { setR(get()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  const [path, q = ''] = r.split('?')
  return { path, query: new URLSearchParams(q) }
}

const Title = ({ a, b, c, light }) => (
  <h2 style={{ fontSize: 40, fontWeight: 700, textAlign: 'center', textTransform: 'uppercase', color: light ? '#fff' : '#222' }}>
    {a} {b && <span>{b} </span>}<span style={{ color: RED }}>{c}</span>
  </h2>
)
const Btn = ({ href, children }) => <a href={'#' + href} className="tw-btn">{children}</a>

function Header({ path }) {
  return (
    <header>
      <div style={{ background: '#222', color: '#ccc', fontSize: 13 }}>
        <div className="container" style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 24 }}>
          <span>E-Mail: <a href="mailto:info@chinathinkwell.com" style={{ color: '#fff' }}>info@chinathinkwell.com</a></span>
          <span>Tel: +86-532-66968791</span>
        </div>
      </div>
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 20 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, height: 90 }}>
          <a href="#/"><img src={LOGO} alt="Thinkwell" style={{ height: 46 }} /></a>
          <div className="hide-sm" style={{ fontSize: 13, color: '#666', lineHeight: 1.4, borderLeft: '1px solid #ddd', paddingLeft: 16 }}>
            <strong style={{ color: '#222', fontSize: 15 }}>Qingdao Thinkwell Hardware &amp; Machinery Co., Ltd.</strong><br />
            Professional Manufacturer in Forging Parts, Offroad Recovery Gear Accessories since 2011.
          </div>
          <nav className="tw-nav" style={{ marginLeft: 'auto', display: 'flex', height: '100%' }}>
            {nav.map(([label, href, sub]) => (
              <div key={label} className="tw-nav-item">
                <a href={'#' + href} className={(href === '/' ? path === '/' : path.startsWith(href.split('?')[0])) ? 'active' : ''}>{label}</a>
                {sub && <div className="tw-sub">{sub.map(([l, h]) => <a key={l} href={'#' + h}>{l}</a>)}</div>}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

function Slider() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % banners.length), 5000); return () => clearInterval(t) }, [])
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#111' }}>
      <img src={banners[i]} alt="Off road trailer accessories" style={{ width: '100%', display: 'block', aspectRatio: '1920/680', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 10 }}>
        {banners.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={'Slide ' + (k + 1)}
            style={{ width: 12, height: 12, borderRadius: '50%', border: 0, cursor: 'pointer', background: k === i ? RED : 'rgba(255,255,255,.7)' }} />
        ))}
      </div>
    </div>
  )
}

const ProductCard = ({ p }) => (
  <a href="#/contact" className="tw-card" style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center' }}>
    <div style={{ border: '1px solid #ddd', background: '#fff', aspectRatio: '1', overflow: 'hidden' }}>
      <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
    <span style={{ fontSize: 15, color: '#333', lineHeight: 1.4 }}>{p.name}</span>
  </a>
)

function Home() {
  const [cat, setCat] = useState(categories[0])
  return (
    <>
      <Slider />
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          <Title a="Popular" b="Products" c="Trailer" />
          <p style={{ textAlign: 'center', color: '#555', maxWidth: 1000 }}>
            These <b>offroad accessories</b> are Thinkwell regular items and most of them can send you samples free of charge. Such as <b>Shackle</b>, <b>Snatch Block</b>, <b>Hitch Receiver</b>, Hitch Tightener, and so on. We can do Customized Logos and Customized packing according to requirements. We have established good business relations with lots of famous Brands because of good quality and professional service. Welcome your inquiries for our <b>popular offroad accessories</b> and trailer parts.
          </p>
          <div className="grid4" style={{ width: '100%' }}>{popular.map((p) => <ProductCard key={p.name} p={p} />)}</div>
          <Btn href="/products">More Trailer Products</Btn>
        </div>
      </section>

      <section style={{ background: '#1b1b1b', color: '#fff', padding: '70px 0' }}>
        <div className="container two-col" style={{ gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: 36, textTransform: 'uppercase' }}>Who <span style={{ color: RED }}>We Are</span></h3>
            <p style={{ color: '#bbb' }}>Thinkwell stands as a leading specialized manufacturer of 4×4 off-road parts &amp; Trailer accessories in China since 2011. We are certified by the ISO9001 Quality Management System; core products have obtained certifications from SGS, CE, and Australian Standard ADR, complying with the standards of European, American, and Australian markets. We have built a strong reputation for innovation, durability, and performance.</p>
            <p style={{ color: '#bbb' }}>With a 8,000 m² modern factory integrating R&amp;D, production, and sales, offering OEM/ODM solutions with competitive pricing, reliable supply chains and 24 x 7 after-sales service.</p>
            <div><Btn href="/about">Learn More</Btn></div>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#333' }}>
            {stats.map(([n, s, l]) => (
              <li key={l} style={{ background: '#1b1b1b', padding: '28px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 700, color: RED, fontFamily: 'Oswald, sans-serif' }}>{n}<small style={{ fontSize: 22 }}>{s}</small></div>
                <div style={{ fontSize: 13, color: '#aaa' }}>{l}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#f3f3f3' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
          <Title a="Product" c="Categories" />
          <p style={{ textAlign: 'center', color: '#555', maxWidth: 1000 }}>Thinkwell has dealt with this for over 19 years and we are ISO certified factory. We mainly deal in Off-road and Trailer Parts, <b>Rigging Hardware</b>, <b>Pole Line Hardware</b>, <b>Off-road Accessories</b>, <b>Customized Forged Parts</b>, and so on.</p>
          <div className="grid4" style={{ width: '100%' }}>
            {productCats.map((c) => (
              <a key={c.name} href="#/products" className="tw-card" style={{ background: '#fff', textAlign: 'center' }}>
                <img src={c.image} alt={c.name} loading="lazy" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                <strong style={{ display: 'block', padding: '12px 0', fontSize: 17, color: '#333' }}>{c.name}</strong>
              </a>
            ))}
          </div>
          <Btn href="/products">Discover More 4 * 4 Off-Road Products</Btn>
        </div>
      </section>

      <section style={{ padding: '40px 0', background: '#f3f3f3', borderTop: '1px solid #e5e5e5' }}>
        <div className="container two-col" style={{ gridTemplateColumns: '3fr 1fr', gap: 24 }}>
          <div className="grid3">{products.filter((p) => p.category === cat).slice(0, 6).map((p) => (
            <a key={p.name} href="#/contact" title={p.name} className="tw-card" style={{ background: '#fff' }}>
              <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', aspectRatio: '1.05', objectFit: 'contain', display: 'block' }} />
            </a>))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}><span style={{ color: RED }}>OUR</span> PRODUCTS</span>
              <a href="#/products" style={{ color: '#888' }}>more ›</a>
            </div>
            {categories.map((c) => (
              <button key={c} onMouseEnter={() => setCat(c)} onClick={() => setCat(c)}
                style={{ textAlign: 'left', background: 'none', border: 0, borderLeft: `3px solid ${c === cat ? RED : 'transparent'}`, padding: '8px 14px', fontSize: 16, color: c === cat ? RED : '#555', cursor: 'pointer' }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <QualitySection />
      <Reviews />
      <NewsSection limit={3} />
    </>
  )
}

function QualitySection() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
        <Title a="Quality" c="Control" />
        <p style={{ textAlign: 'center', color: '#555', maxWidth: 1000 }}>Quality and credit are the life of <b>Thinkwell</b>.<br />We have a 100T Strength Tensile Machine, Hardness Testing Machine, Salt Spraying Machine, and other inspection tools to ensure the quality meets standard and client requirements. SGS, TUV, and other third-party quality inspections are acceptable.</p>
        <div className="grid4" style={{ width: '100%' }}>
          {quality.map((q) => (
            <div key={q.title} style={{ background: '#f3f3f3' }}>
              <img src={q.image} alt={q.title} loading="lazy" style={{ width: '100%', aspectRatio: '330/200', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 20, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontSize: 18, color: '#333' }}>{q.title}</h3>
                <p style={{ fontSize: 14, color: '#666' }}>{q.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Btn href="/quality">Find More Details</Btn>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section style={{ padding: '60px 0', background: '#f3f3f3' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ textAlign: 'center' }}>
          <Title a="Customer" c="Evaluation" />
          <p style={{ color: '#666', marginTop: 8 }}>Customer satisfaction is our biggest impetus!</p>
        </div>
        <div className="grid3">
          {reviews.map((r) => (
            <div key={r.name} style={{ background: '#fff', padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <img src={r.avatar} alt={r.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <strong style={{ color: RED }}>{r.name}</strong>
                <p style={{ fontSize: 14, color: '#666' }}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsSection({ limit }) {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center' }}>
        <Title a="Our" c="News" />
        <div className="grid3" style={{ width: '100%' }}>
          {news.slice(0, limit).map((n) => (
            <article key={n.title} style={{ boxShadow: '0 2px 10px rgba(0,0,0,.08)', background: '#fff' }}>
              <img src={n.image} alt="" loading="lazy" style={{ width: '100%', aspectRatio: '380/230', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ color: RED, fontSize: 14 }}>{n.date}</span>
                <h3 style={{ fontSize: 20, fontWeight: 400, color: '#222' }}>{n.title}</h3>
                <p style={{ fontSize: 14, color: '#666' }}>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        {limit < news.length || limit === 3 ? <Btn href="/news">Read More News</Btn> : null}
      </div>
    </section>
  )
}

const PageHead = ({ title, crumb }) => (
  <div style={{ background: '#1b1b1b', color: '#fff', padding: '50px 0' }}>
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h1 style={{ fontSize: 34, textTransform: 'uppercase' }}>{title}</h1>
      <span style={{ color: '#aaa', fontSize: 14 }}><a href="#/">Home</a> » {crumb || title}</span>
    </div>
  </div>
)

function Products({ query }) {
  const active = query.get('c') || 'All'
  const list = active === 'All' ? [...products, ...popular] : products.filter((p) => p.category === active).concat(active === 'Trailer Parts' ? popular : [])
  return (
    <>
      <PageHead title="Products" crumb={active === 'All' ? 'Products' : 'Products » ' + active} />
      <section style={{ padding: '48px 0' }}>
        <div className="container two-col" style={{ gridTemplateColumns: '240px 1fr', gap: 32, alignItems: 'start' }}>
          <aside style={{ border: '1px solid #e5e5e5' }}>
            <div style={{ background: RED, color: '#fff', padding: '12px 16px', fontWeight: 700 }}>PRODUCT CATEGORY</div>
            {['All', ...categories].map((c) => (
              <a key={c} href={'#/products' + (c === 'All' ? '' : '?c=' + encodeURIComponent(c))}
                style={{ display: 'block', padding: '12px 16px', borderTop: '1px solid #eee', color: c === active ? RED : '#444' }}>{c}</a>
            ))}
          </aside>
          <div className="grid3">{list.map((p) => <ProductCard key={p.name} p={p} />)}</div>
        </div>
      </section>
    </>
  )
}

function About() {
  const why = [
    ['Full-chain one stop service', '"Design-Produce-E-Commerce" one stop service expert.'],
    ['Industry and trade integration', 'Streamlined processes – competitive pricing.'],
    ['Global Export Experience', 'Exported to high-end markets such as America, Europe and Australia.'],
    ['End-to-End Service', 'From demand matching to after-sales support, a one-stop, worry-free experience.'],
    ['E-Commerce Specialist', 'Incubated 10+ cross-border e-commerce companies and 30+ long-term partners.'],
    ['Flexible Supply Chain', 'Small-batch, quick-turnaround orders; customized packaging acceptable.'],
    ['19+ Years Expertise', 'Long-term development with 30% annual performance growth.'],
    ['Young & Dynamic Team', 'Fast response, customer-first – positive, sincere and pragmatic.'],
  ]
  const adv = [
    ['Technology-Driven Innovation', 'Dedicated R&D team with full-cycle capabilities from design to mass production. Forging, stamping, precision casting, CNC machining, welding and assembly.'],
    ['Internationally Certified Quality & Testing', 'ISO 9001 certified with SGS, CE and Australian ADR compliance. Laser scanners, 100T tensile testers, hardness testers and salt spray chambers.'],
    ['Reliable Delivery & Customization', '50+ expert team ensuring on-time delivery. OEM/ODM support from 3D prototyping to mass production.'],
    ['Service Ecosystem', 'Full-process B2B support, e-commerce ready imagery and manuals, and 20,000+ SKUs on hand.'],
  ]
  return (
    <>
      <PageHead title="ThinkWell Manufacturer" crumb="About" />
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <Title a="Qingdao Thinkwell" c="Hardware & Machinery" />
          <div className="grid3">
            {[['01', 'About Us', 'With a 8,000 m² modern factory integrating R&D, production, and sales, offering OEM/ODM solutions with competitive pricing, reliable supply chains and 24 x 7 after-sales service.'],
              ['02', 'Main Products', 'Thinkwell stands as a leading specialized manufacturer of 4×4 off-road parts & Trailer accessories in China since 2011.'],
              ['03', 'Industry-Leading', 'Thinkwell continues to set the benchmark in the Off-road and Trailer industry, empowering explorers and professionals with trusted, high-performance parts.']].map(([n, t, d]) => (
              <div key={n} style={{ borderTop: `3px solid ${RED}`, background: '#f3f3f3', padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 40, color: RED, fontFamily: 'Oswald, sans-serif' }}>{n}</span>
                <h3>{t}</h3><p style={{ color: '#666' }}>{d}</p>
              </div>
            ))}
          </div>
          <Title a="Why Choose" c="ThinkWell" />
          <div className="grid4">
            {why.map(([t, d], i) => (
              <div key={t} style={{ border: '1px solid #e5e5e5', padding: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <strong style={{ color: RED }}>{i + 1}. {t}</strong><span style={{ fontSize: 14, color: '#666' }}>{d}</span>
              </div>
            ))}
          </div>
          <Title a="ThinkWell Core" c="Advantages" />
          <div className="two-col" style={{ gap: 20 }}>
            {adv.map(([t, d]) => (
              <div key={t} style={{ background: '#1b1b1b', color: '#fff', padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ color: RED }}>{t}</h3><p style={{ color: '#bbb' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <PageHead title="FAQ" crumb="Support » FAQ" />
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900 }}>
          <Title a="Maintains &" c="Service" />
          <p style={{ textAlign: 'center', color: '#666' }}>The factory covers an area of 10,000 square meters and employs over 250 full-time staff. An Engineering department, Design department, Technical department with 15 Technicians and a QC/QA department overseeing all operations.</p>
          {faqs.map(([q, a], i) => (
            <div key={q} style={{ border: '1px solid #e5e5e5' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', textAlign: 'left', display: 'flex', gap: 12, padding: 16, background: open === i ? '#f7f7f7' : '#fff', border: 0, cursor: 'pointer', fontSize: 16 }}>
                <b style={{ color: RED }}>Q</b>{q}
              </button>
              {open === i && <p style={{ padding: '0 16px 16px 40px', color: '#666' }}><b style={{ color: '#222' }}>A </b>{a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function InquiryForm({ dark }) {
  const [sent, setSent] = useState(false)
  const f = { background: 'transparent', border: 0, borderBottom: `1px solid ${dark ? '#666' : '#ccc'}`, padding: '10px 6px', color: dark ? '#fff' : '#222', font: 'inherit', width: '100%' }
  if (sent) return <p style={{ color: dark ? '#fff' : '#222' }}>Thank you! We will contact you within 24 hours.</p>
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <input style={f} placeholder="Name" />
      <input style={f} placeholder="*Email" type="email" required />
      <input style={f} placeholder="Company Name" />
      <input style={f} placeholder="*Tel" required />
      <textarea style={{ ...f, gridColumn: '1 / -1', minHeight: 80 }} placeholder="*Message" required />
      <div><button type="submit" style={{ background: RED, color: '#fff', border: 0, padding: '8px 32px', cursor: 'pointer' }}>Submit</button></div>
    </form>
  )
}

function Contact() {
  return (
    <>
      <PageHead title="Contact Us" />
      <section style={{ padding: '60px 0' }}>
        <div className="container two-col" style={{ gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2>Qingdao Thinkwell Hardware &amp; Machinery Co., Ltd.</h2>
            <p><b>Tel:</b> +86-0532-66968791</p>
            <p><b>Phone / WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=8615953297946" style={{ color: RED }}>+86-15953297946</a></p>
            <p><b>Email:</b> <a href="mailto:info@chinathinkwell.com" style={{ color: RED }}>info@chinathinkwell.com</a>, victor@chinathinkwell.com</p>
            <p><b>Address:</b> No. 19, Third Ring Road, Jimo District, Qingdao City, Shandong Province, China</p>
          </div>
          <div style={{ background: '#f3f3f3', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Please fill in your request</h3>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#111', color: '#ccc', borderTop: `12px solid ${RED}` }}>
      <div className="container footer-grid" style={{ padding: '48px 24px', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <img src={LOGO_WHITE} alt="THINK WELL" style={{ height: 40, alignSelf: 'flex-start' }} />
          <InquiryForm dark />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h3 style={{ color: '#fff', fontWeight: 400, borderBottom: `3px solid ${RED}`, alignSelf: 'flex-start', paddingBottom: 6, marginBottom: 12 }}>Quick Links</h3>
          {[['Home', '/'], ['Products', '/products'], ['About', '/about'], ['Support', '/quality'], ['News', '/news'], ['Contact', '/contact']].map(([l, h]) => (
            <a key={l} href={'#' + h} className="foot-link">» {l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, fontSize: 15 }}>
          <div>Call Us :<br /><span style={{ color: '#fff' }}>+86-0532-66968791</span></div>
          <div>Email :<br /><a href="mailto:info@chinathinkwell.com" style={{ color: '#fff' }}>info@chinathinkwell.com</a><br /><span style={{ color: '#fff' }}>victor@chinathinkwell.com</span></div>
          <div style={{ color: '#fff' }}>No. 19, Third Ring Road, Jimo District, Qingdao City, Shandong Province, China</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #222', padding: '16px 0', fontSize: 13, color: '#888' }}>
        <div className="container">© Copyrights 2022 Qingdao Thinkwell Hardware &amp; Machinery Co., Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  const { path, query } = useRoute()
  const page = {
    '/': <Home />, '/products': <Products query={query} />, '/about': <About />,
    '/quality': <><PageHead title="Quality Control" crumb="Support » Quality Control" /><QualitySection /></>,
    '/faq': <Faq />, '/news': <><PageHead title="News" /><NewsSection limit={99} /></>, '/contact': <Contact />,
  }[path] || <Home />
  return (
    <>
      <Header path={path} />
      <main>{page}</main>
      <Footer />
    </>
  )
}
