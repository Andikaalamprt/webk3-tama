import { useEffect, useState } from 'react'

import { pelatihanData } from './data'
import logoUrl from './img/4a90bbdd52a0d08055cfddb9fe918b57.webp'


const DAFTAR_URL = 'https://www.geomandiri.co.id/jadwal-training/2026.html'

export default function App() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('visible')
        }
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [active])

  const kategori = pelatihanData[active]

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#0f172a', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }

        .reveal {
          opacity: 0;
          transform: translateY(18px);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity .6s ease, transform .6s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; }
          .reveal.visible { transition: none; }
        }


        /* NAVBAR */
        .navbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(15,23,42,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .navbar-brand {
          font-size: 1.2rem; font-weight: 800; color: #fff;
          letter-spacing: -0.5px; display: flex; align-items: center; gap: 10px;
        }

        .navbar-logo {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          object-fit: contain;
          flex-shrink: 0;
          background: rgba(13,148,136,0.12);
          border: 1px solid rgba(13,148,136,0.25);
          padding: 6px;
        }

        .navbar-brand span {
          background: linear-gradient(135deg, #0d9488, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .nav-links { display: flex; gap: 28px; }
        .nav-links a {
          color: rgba(255,255,255,0.6); text-decoration: none;
          font-size: .88rem; font-weight: 500;
          transition: color .2s;
        }
        .nav-links a:hover { color: #fff; }

        /* HERO */
        .hero {
          position: relative; overflow: hidden;
          padding: 80px 24px 70px;
          text-align: center;
          background: #0f172a;
        }
        .hero-glow {
          position: absolute; top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(13,148,136,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(13,148,136,0.12);
          border: 1px solid rgba(13,148,136,0.3);
          color: #2dd4bf; padding: 6px 16px; border-radius: 50px;
          font-size: .8rem; font-weight: 600; letter-spacing: .5px;
          text-transform: uppercase; margin-bottom: 24px;
        }
        .hero h1 {
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 800; color: #fff;
          line-height: 1.15; letter-spacing: -1px;
          margin-bottom: 18px;
        }
        .hero h1 em {
          font-style: normal;
          background: linear-gradient(135deg, #0d9488, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero p {
          color: rgba(255,255,255,0.55); font-size: 1.05rem;
          max-width: 520px; margin: 0 auto 32px;
          line-height: 1.7;
          font-family: 'DM Sans', sans-serif;
        }
        .hero-btn {
          display: inline-block;
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: #fff; border: none; padding: 14px 36px;
          border-radius: 50px; font-size: 1rem; font-weight: 700;
          cursor: pointer; transition: all .3s;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(13,148,136,0.35);
        }
        .hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(13,148,136,0.45);
          color: #fff;
        }

        /* STATS */
        .stats {
          display: flex; justify-content: center; gap: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }
        .stat-item {
          flex: 1; max-width: 200px;
          padding: 24px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-size: 1.8rem; font-weight: 800; color: #2dd4bf;
          line-height: 1;
        }
        .stat-label {
          font-size: .78rem; color: rgba(255,255,255,0.45);
          margin-top: 6px; font-weight: 500;
          text-transform: uppercase; letter-spacing: .5px;
        }

        /* MAIN */
        .main { max-width: 1100px; margin: 0 auto; padding: 48px 20px 80px; }

        /* SECTION TITLE */
        .section-label {
          font-size: .75rem; font-weight: 700; color: #0d9488;
          text-transform: uppercase; letter-spacing: 1.5px;
          margin-bottom: 8px;
        }
        .section-title {
          font-size: 1.6rem; font-weight: 800; color: #fff;
          margin-bottom: 28px; letter-spacing: -.5px;
        }

        /* CATEGORY TABS */
        .cat-wrap {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 32px;
        }
        .cat-btn {
          padding: 9px 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px; cursor: pointer;
          font-size: .82rem; font-weight: 600;
          color: rgba(255,255,255,0.55);
          transition: all .2s;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cat-btn:hover {
          background: rgba(13,148,136,0.12);
          border-color: rgba(13,148,136,0.3);
          color: #2dd4bf;
        }
        .cat-btn.active {
          background: linear-gradient(135deg, #0d9488, #0891b2);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 16px rgba(13,148,136,0.3);
        }

        /* CONTENT CARD */
        .content-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; overflow: hidden;
          animation: fadeUp .35s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-header {
          padding: 24px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; gap: 16px;
          background: rgba(255,255,255,0.02);
        }
        .card-icon {
          font-size: 2rem; width: 56px; height: 56px;
          background: rgba(13,148,136,0.12);
          border: 1px solid rgba(13,148,136,0.2);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .card-title { font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .card-desc  { font-size: .85rem; color: rgba(255,255,255,0.45); font-family: 'DM Sans', sans-serif; }

        /* TABLE */
        .table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        table {
          width: 100%; min-width: 580px;
          border-collapse: collapse;
        }
        thead th {
          padding: 14px 20px;
          text-align: left;
          font-size: .72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: .8px;
          color: rgba(255,255,255,0.35);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          white-space: nowrap;
        }
        tbody td {
          padding: 15px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: .9rem; color: rgba(255,255,255,0.75);
          vertical-align: middle;
          font-family: 'DM Sans', sans-serif;
        }
        tbody tr:last-child td { border-bottom: none; }
        tbody tr { transition: background .15s; }
        tbody tr:hover { background: rgba(255,255,255,0.03); }
        td strong { color: #fff; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif; }

        .badge-biaya {
          background: rgba(16,185,129,0.12);
          color: #34d399;
          border: 1px solid rgba(16,185,129,0.2);
          padding: 4px 12px; border-radius: 20px;
          font-weight: 700; font-size: .82rem; white-space: nowrap;
        }
        .badge-durasi {
          background: rgba(245,158,11,0.1);
          color: #fbbf24;
          border: 1px solid rgba(245,158,11,0.2);
          padding: 4px 12px; border-radius: 20px;
          font-weight: 700; font-size: .82rem; white-space: nowrap;
        }
        .btn-daftar {
          display: inline-block;
          background: linear-gradient(135deg, #0d9488, #0891b2);
          color: #fff; border: none;
          padding: 7px 20px; border-radius: 50px;
          font-size: .82rem; font-weight: 700;
          cursor: pointer; transition: all .25s;
          text-decoration: none; white-space: nowrap;
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-shadow: 0 2px 10px rgba(13,148,136,0.2);
        }
        .btn-daftar:hover {
          transform: scale(1.06);
          box-shadow: 0 4px 16px rgba(13,148,136,0.4);
          color: #fff;
        }

        /* INFO CARDS */
        .info-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-top: 40px;
        }
        .info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 24px;
          transition: all .3s;
        }
        .info-card:hover {
          border-color: rgba(13,148,136,0.3);
          background: rgba(13,148,136,0.05);
          transform: translateY(-3px);
        }
        .info-icon {
          font-size: 1.6rem; width: 48px; height: 48px;
          background: rgba(13,148,136,0.1);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .info-card h5 { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .info-card p  { font-size: .83rem; color: rgba(255,255,255,0.45); line-height: 1.6; font-family: 'DM Sans', sans-serif; }

        /* FOOTER */
        footer {
          text-align: center; padding: 28px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.3);
          font-size: .82rem;
        }
        footer strong { color: rgba(255,255,255,0.55); }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .stats { flex-wrap: wrap; }
          .stat-item { min-width: 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .info-grid { grid-template-columns: 1fr; }
          .card-header { padding: 18px 20px; }
          thead th, tbody td { padding: 12px 14px; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span>Geo Mandiri</span> Group
        </div>

        <div className="nav-links">
          <a href="#pelatihan">Pelatihan</a>
          <a href="#footer">Kontak</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="reveal" />

        <div className="hero-glow" />
        <div className="hero-grid" />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-badge">
          <img
            src={logoUrl}
            alt="Logo Geo Mandiri"
            style={{ width: 80, height: 80, borderRadius: 10, marginRight: 12, verticalAlign: 'middle', objectFit: 'contain' }}

          />
            PT.Geo Mandiri Kreasi
        </div>

          <h1>Pelatihan <em>K3 Profesional</em><br />Geo Mandiri Group</h1>
          <p>Tingkatkan kompetensi Keselamatan dan Kesehatan Kerja Anda bersama instruktur bersertifikat nasional.</p>

          <a className="hero-btn" href="#pelatihan">Lihat Program Pelatihan →</a>
        </div>
      </section>

      {/* Stats */}
      <div className="stats reveal">

        {[
          { num: '13', label: 'Bidang Pelatihan' },
          { num: '58', label: 'Program Tersedia' },
          { num: '100%', label: 'Sertifikat Resmi Kemnaker' },
          { num: 'Kemnaker', label: 'Instruktur' },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Main */}
      <main className="main" id="pelatihan">
        <p className="section-label">Program Kami</p>
        <h2 className="section-title">Pilih Bidang Pelatihan</h2>

        {/* Category tabs */}
        <div className="cat-wrap">
          {pelatihanData.map((d, i) => (
            <button
              key={d.id}
              className={`cat-btn ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {d.icon} {d.kategori}
            </button>
          ))}
        </div>

        {/* Table card */}
        <div className="content-card reveal" key={active}>

          <div className="card-header">
            <div className="card-icon">{kategori.icon}</div>
            <div>
              <div className="card-title">{kategori.kategori}</div>
              <div className="card-desc">{kategori.deskripsi}</div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Pelatihan</th>
                  <th>Biaya</th>
                  <th>Durasi</th>
                  <th>Instruktur</th>
                  <th>Daftar</th>
                </tr>
              </thead>
              <tbody>
                {kategori.list.map(r => (
                  <tr key={r.no}>
                    <td>{r.no}</td>
                    <td><strong>{r.nama}</strong></td>
                    <td><span className="badge-biaya">{r.biaya}</span></td>
                    <td><span className="badge-durasi">{r.durasi}</span></td>
                    <td>{r.instruktur}</td>
                    <td>
                      <a className="btn-daftar" href={DAFTAR_URL} target="_blank" rel="noreferrer">
                        Daftar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info cards */}
        <div className="info-grid">
          {[
            { icon: '📚', title: 'Instruktur Berpengalaman', desc: 'Dibimbing langsung oleh instruktur profesional bersertifikat dari Kemnaker.' },
            { icon: '🏆', title: 'Sertifikat Resmi', desc: 'Dapatkan sertifikat yang diakui secara nasional oleh Kementerian Ketenagakerjaan.' },
            { icon: '💼', title: 'Materi Praktis', desc: 'Pembelajaran berbasis praktik lapangan dan studi kasus nyata di industri.' },
          ].map((c, i) => (
            <div className="info-card reveal" key={i}>

              <div className="info-icon">{c.icon}</div>
              <h5>{c.title}</h5>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer id="footer">
        <p><strong>© 2026 Geo Mandiri Group</strong> — Pelatihan K3 Profesional</p>
        <p style={{ marginTop: 6 }}>Komitmen Kami adalah Keselamatan dan Kesehatan Kerja Anda</p>
      </footer>
    </div>
  )
}
