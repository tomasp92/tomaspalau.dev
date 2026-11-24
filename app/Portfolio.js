'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { content, links } from '../lib/content'
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon, DownloadIcon, ArrowIcon } from './icons'

const SECTIONS = ['about', 'experience', 'skills', 'background', 'contact']
const STORAGE_KEY = 'lang'

export default function Portfolio() {
  const [lang, setLang] = useState('en')
  const [active, setActive] = useState('about')
  const t = content[lang]

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') setLang(saved)
    else if (navigator.language?.toLowerCase().startsWith('es')) setLang('es')
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const toggleLang = () => {
    const next = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <div className="shell">
      <aside className="side">
        <div className="side-inner">
          <Image className="avatar" src="/images/foto-yo.png" alt="Tomás Palau Posse" width={112} height={124} priority />
          <h1 className="name">Tomás Palau Posse</h1>
          <p className="role">{t.role}</p>
          <p className="location">{t.location}</p>
          <p className="status">
            <span className="dot" aria-hidden="true" />
            {t.status}
          </p>

          <nav className="nav" aria-label="Sections">
            {SECTIONS.map((id) => (
              <a key={id} href={`#${id}`} className={active === id ? 'is-active' : undefined}>
                <span className="nav-line" aria-hidden="true" />
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="side-footer">
            <a className="btn btn-primary" href={links.cv} target="_blank" rel="noreferrer">
              <DownloadIcon />
              {t.downloadCv}
            </a>
            <div className="socials">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={`mailto:${links.email}`} aria-label="Email"><MailIcon /></a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <button className="lang" onClick={toggleLang} aria-label={t.switchTo}>
          <span className={lang === 'en' ? 'on' : undefined}>EN</span>
          <span className="sep">/</span>
          <span className={lang === 'es' ? 'on' : undefined}>ES</span>
        </button>

        <section id="about" className="section hero">
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-question">
            <p className="eyebrow">{t.about.question}</p>
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title"><span className="num">01</span>{t.experienceTitle}</h2>
          <ol className="timeline">
            {t.experience.map((job) => (
              <li key={job.company} className="job">
                <div className="job-dates">{job.dates}</div>
                <div className="job-body">
                  <h3>
                    {job.role} <span className="at">· {job.company}</span>
                  </h3>
                  {job.summary && <p className="job-summary">{job.summary}</p>}
                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title"><span className="num">02</span>{t.skillsTitle}</h2>
          <div className="skills">
            {t.skills.map((s) => (
              <div key={s.group} className="skill-group">
                <h3>{s.group}</h3>
                <div className="tags">
                  {s.items.map((item) => (
                    <span key={item} className="tag tag-lg">{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="skill-group">
              <h3>{t.languagesLabel}</h3>
              <div className="tags">
                {t.languages.map((l) => (
                  <span key={l} className="tag tag-lg">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="background" className="section">
          <h2 className="section-title"><span className="num">03</span>{t.backgroundTitle}</h2>
          <div className="cards">
            {t.background.map((item) => (
              <article key={item.title} className="card">
                <p className="card-dates">{item.dates}</p>
                <h3>{item.title}</h3>
                <p className="card-org">{item.org}</p>
                {item.note && <p className="card-note">{item.note}</p>}
                {item.href && (
                  <a className="card-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.linkLabel} <ArrowIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section-title"><span className="num">04</span>{t.contact.title}</h2>
          <p className="contact-text">{t.contact.text}</p>
          <a className="contact-mail" href={`mailto:${links.email}`}>
            {links.email} <ArrowIcon />
          </a>
          <div className="contact-actions">
            <a className="btn btn-ghost" href={links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a className="btn btn-ghost" href={links.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
            <a className="btn btn-ghost" href={links.whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Tomás Palau Posse · {t.footer}
        </footer>
      </main>
    </div>
  )
}
