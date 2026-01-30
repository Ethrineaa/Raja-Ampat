import React from "react";
import "./App.css";

const destinations = [
  {
    title: "Wayag",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    desc: "Ikon karst yang ikonik, pemandangan pulau-pulau kecil dan laguna toska.",
  },
  {
    title: "Pianemo",
    img: "https://images.unsplash.com/photo-1529365091034-9fdf2d1b32f9?auto=format&fit=crop&w=1200&q=80",
    desc: "Bukit-bukit batu kapur dengan pemandangan panorama yang menakjubkan.",
  },
  {
    title: "Misool",
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80",
    desc: "Terumbu karang kaya dengan spot menyelam kelas dunia.",
  },
  {
    title: "Desa Arborek",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    desc: "Desa wisata tradisional, budaya, dan kerajinan lokal.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="brand">
          Explore <span>Raja Ampat</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#tentang" onClick={closeMenu}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#destinasi" onClick={closeMenu}>
              Destinasi
            </a>
          </li>
          <li>
            <a href="#aktivitas" onClick={closeMenu}>
              Aktivitas
            </a>
          </li>
          <li>
            <a href="#kuliner" onClick={closeMenu}>
              Kuliner
            </a>
          </li>
          <li>
            <a href="#budaya" onClick={closeMenu}>
              Budaya
            </a>
          </li>
          <li>
            <a href="#galeri" onClick={closeMenu}>
              Galeri
            </a>
          </li>
          <li className="hide-desktop">
            <a className="btn primary" href="#kontak" onClick={closeMenu}>
              Hubungi
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            className="btn small hide-mobile"
            href="mailto:info@raja-ampat.travel"
          >
            Hubungi
          </a>

          <button
            className={`nav-toggle ${menuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-backdrop ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <header className="hero" role="banner">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Explore Raja Ampat</h1>
          <p className="lead">
            Nikmati keajaiban laut tropis, pulau karst yang dramatis, dan
            perairan yang jernih sempurna untuk petualangan bawah laut.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#destinasi">
              Jelajahi Sekarang
            </a>
            <a className="btn outline" href="#kontak">
              Rencanakan Perjalanan
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="tentang" className="container about">
          <h2>Tentang Raja Ampat</h2>
          <p>
            Terletak di barat laut Papua, Raja Ampat adalah surga keanekaragaman
            hayati laut dengan ratusan pulau kecil, atol, dan terumbu karang
            yang kaya. Destinasi ini menawarkan pengalaman menyelam dan
            snorkeling kelas dunia serta budaya pesisir yang hangat.
          </p>
          <div className="features">
            <div>
              <strong>Keanekaragaman Laut</strong>
              <p>
                Kaya akan spesies ikan, koral, dan ekosistem laut yang unik di
                dunia.
              </p>
            </div>
            <div>
              <strong>Pulau Eksotis</strong>
              <p>Pulau-pulau karst dan laguna berair toska yang menakjubkan.</p>
            </div>
            <div>
              <strong>Komunitas Lokal</strong>
              <p>Keramahan penduduk adat dan tradisi yang terjaga.</p>
            </div>
          </div>
        </section>

        <section id="destinasi" className="container cards">
          <h2>Destinasi Wisata Populer</h2>
          <div className="grid">
            {destinations.map((d) => (
              <article className="card" key={d.title}>
                <img src={d.img} alt={d.title} />
                <div className="card-body">
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="aktivitas" className="container activities">
          <h2>Aktivitas Wisata</h2>
          <ul className="activity-list">
            <li>
              <strong>Snorkeling</strong> — Jelajahi terumbu karang
              berwarna-warni di perairan dangkal.
            </li>
            <li>
              <strong>Diving</strong> — Spot menyelam profesional dengan
              kehidupan laut yang melimpah.
            </li>
            <li>
              <strong>Island hopping</strong> — Kunjungi pulau-pulau kecil dan
              pantai tersembunyi.
            </li>
            <li>
              <strong>Sunset & Fotografi</strong> — Sunset dramatis sempurna
              untuk foto lanskap.
            </li>
          </ul>
        </section>

        <section id="kuliner" className="container food">
          <h2>Kuliner Khas</h2>
          <div className="grid-3">
            <div className="food-card">
              <h4>Papeda</h4>
              <p>
                Makanan tradisional Papua yang lembut dan khas, biasanya
                disantap dengan ikan kuah.
              </p>
            </div>
            <div className="food-card">
              <h4>Ikan Bakar Khas Papua</h4>
              <p>
                Ikan segar dibakar dengan bumbu lokal yang sederhana dan lezat.
              </p>
            </div>
            <div className="food-card">
              <h4>Sagu & Olahan Laut</h4>
              <p>
                Sagu sebagai bahan pokok dan olahan laut segar menjadi
                pengalaman kuliner otentik.
              </p>
            </div>
          </div>
        </section>

        <section id="budaya" className="container culture">
          <h2>Budaya & Tradisi Lokal</h2>
          <p>
            Kehidupan masyarakat adat yang bergantung pada laut, tarian dan
            upacara tradisional Papua, serta kearifan lokal yang ramah kepada
            wisatawan.
          </p>
        </section>

        <section id="akses" className="container access">
          <h2>Akses & Transportasi</h2>
          <p>
            Rute umum: Sorong (akses via udara) → kapal/boat cepat ke
            Pulau-pulau Raja Ampat. Transportasi antar pulau biasanya
            menggunakan kapal lokal atau speedboat.
          </p>
          <h3>Waktu Terbaik Berkunjung</h3>
          <p>
            Musim kemarau (April–Desember) umumnya menawarkan cuaca lebih tenang
            dan visibilitas laut lebih baik untuk aktivitas laut.
          </p>
        </section>

        <section id="galeri" className="container gallery">
          <h2>Galeri Foto</h2>
          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80"
              alt="Panorama"
            />
            <img
              src="https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=80"
              alt="Underwater"
            />
            <img
              src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80"
              alt="Culture"
            />
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
              alt="Sunset"
            />
          </div>
        </section>

        <section id="kontak" className="container cta">
          <h2>Siap Menjelajah?</h2>
          <p>
            Hubungi kami untuk memesan trip, konsultasi rencana perjalanan, atau
            mendapatkan informasi lebih lanjut tentang paket wisata Raja Ampat.
          </p>
          <a className="btn primary large" href="mailto:info@raja-ampat.travel">
            Hubungi Sekarang
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Explore Raja Ampat — Temukan keajaiban
          laut Indonesia 🌊
        </p>
      </footer>
    </div>
  );
}

export default App;
