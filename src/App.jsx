const services = [
  { title: 'Strategy & Advisory', text: 'Clear roadmaps that align technology investments with measurable business outcomes.' },
  { title: 'Digital Engineering', text: 'Modern web, cloud, and data platforms built for reliability and scale.' },
  { title: 'Talent & Training', text: 'Upskilling programs that help your teams think well and deliver better.' },
]
const stats = [['250+', 'Projects delivered'], ['40', 'States served'], ['98%', 'Client retention'], ['15 yrs', 'Of experience']]

export default function App() {
  return (
    <>
      <header style={{ borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, background: '#fff', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <a href="#" style={{ fontWeight: 800, fontSize: 20 }}>Thinkwell <span style={{ color: '#1d4ed8' }}>USA</span></a>
          <nav className="nav-links" style={{ display: 'flex', gap: 28, fontWeight: 500 }}>
            <a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px' }}>Get in touch</a>
        </div>
      </header>

      <section style={{ background: '#f8fafc', padding: '96px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 820, textAlign: 'center', alignItems: 'center' }}>
          <span style={{ color: '#1d4ed8', fontWeight: 600, fontSize: 14, letterSpacing: 1, textTransform: 'uppercase' }}>Built in America · Trusted nationwide</span>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 60px)', lineHeight: 1.1, fontWeight: 800 }}>Think well. Build better. Grow with confidence.</h1>
          <p style={{ fontSize: 19, color: '#475569', maxWidth: 640 }}>Thinkwell USA partners with organizations across the country to turn bold ideas into practical, lasting results.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary">Start a project</a>
            <a href="#services" className="btn btn-ghost">Explore services</a>
          </div>
        </div>
      </section>

      <section id="services" style={{ padding: '88px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800 }}>What we do</h2>
            <p style={{ color: '#475569' }}>End-to-end expertise, from first idea to final delivery.</p>
          </div>
          <div className="grid3">
            {services.map((s, i) => (
              <div key={s.title} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: '#dbeafe', color: '#1d4ed8', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{i + 1}</div>
                <h3 style={{ fontSize: 20 }}>{s.title}</h3>
                <p style={{ color: '#475569' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ background: '#0f172a', color: '#fff', padding: '72px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map(([n, l]) => (
            <div key={l}><div style={{ fontSize: 40, fontWeight: 800, color: '#93c5fd' }}>{n}</div><div style={{ color: '#cbd5e1' }}>{l}</div></div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '88px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: 34, fontWeight: 800 }}>Ready to think bigger?</h2>
          <p style={{ color: '#475569', maxWidth: 560 }}>Tell us about your goals and we'll get back to you within one business day.</p>
          <a href="mailto:hello@thinkwellusa.com" className="btn btn-primary">hello@thinkwellusa.com</a>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #e2e8f0', padding: '24px 0', color: '#64748b', fontSize: 14 }}>
        <div className="container">© {new Date().getFullYear()} Thinkwell USA. All rights reserved.</div>
      </footer>
    </>
  )
}
