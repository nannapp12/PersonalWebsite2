import type { CSSProperties } from "react";
import {
  about,
  builds,
  certifications,
  education,
  otherSite,
  profile,
  roles,
  stages,
  timelineEnd,
  workOn,
} from "./content";

// Timeline axis runs from January 2012 to January 2027.
const AXIS_START = 2012;
const AXIS_END = 2027;
const span = (AXIS_END - AXIS_START) * 12;
const pos = ([y, m]: [number, number]) => (((y - AXIS_START) * 12 + (m - 1)) / span) * 100;
const ticks = [2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026];
const monthName = (m: number) =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];

function GitHubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M0 1.15C0 .52.52 0 1.16 0h13.68C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.16 1.15H1.16C.52 16 0 15.48 0 14.85V1.15zM4.94 13.4V6.17H2.54v7.23h2.4zM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01zm2.53 8.22h2.4V9.36c0-.21.02-.43.08-.58.17-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.87h2.4V9.25c0-2.22-1.18-3.26-2.76-3.26-1.28 0-1.84.71-2.16 1.2v.03h-.01l.01-.03V6.17h-2.4c.03.68 0 7.23 0 7.23z" />
    </svg>
  );
}

export default function Home() {
  const today = pos(timelineEnd);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="nav-name">Pujitha Nannapaneni</a>
          <nav aria-label="Primary">
            <a className="nav-anchor" href="#career">Career</a>
            <a className="nav-anchor" href="#builds">Builds</a>
            <a className="nav-anchor" href="#credentials">Credentials</a>
            <a className="nav-anchor" href="#contact">Contact</a>
            <a className="nav-alt" href={otherSite.url}>{otherSite.label}</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <div className="wrap">
            <h1>Pujitha Nannapaneni</h1>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-meta">
              {profile.role}, based in {profile.location}.
            </p>
            <div className="actions">
              <a className="btn btn-marigold" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInMark /> Connect on LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                <GitHubMark /> See my code on GitHub
              </a>
            </div>

            <figure id="career" className="pipeline" aria-labelledby="pipeline-caption">
              <figcaption id="pipeline-caption">Career pipeline, 2012 to today</figcaption>
              <div className="pipeline-axis" aria-hidden="true">
                <span className="pipeline-label-spacer" />
                <div className="pipeline-track">
                  {ticks.map((y) => (
                    <span key={y} className="tick" style={{ left: `${pos([y, 1])}%` }}>{y}</span>
                  ))}
                </div>
              </div>
              <ol className="pipeline-rows">
                {roles.map((r, i) => {
                  const start = pos(r.start);
                  const end = r.end ? pos([r.end[1] === 12 ? r.end[0] + 1 : r.end[0], r.end[1] === 12 ? 1 : r.end[1] + 1]) : today;
                  const period = `${monthName(r.start[1])} ${r.start[0]} to ${r.end ? `${monthName(r.end[1])} ${r.end[0]}` : "present"}`;
                  return (
                    <li key={r.company} className={r.end ? "row" : "row row-current"} style={{ "--i": i } as CSSProperties}>
                      <div className="row-label">
                        <span className="row-company">{r.company}</span>
                        <span className="row-title">{r.title}</span>
                      </div>
                      <div className="pipeline-track">
                        {ticks.map((y) => (
                          <span key={y} className="gridline" style={{ left: `${pos([y, 1])}%` }} aria-hidden="true" />
                        ))}
                        <span
                          className="bar"
                          style={{ left: `${start}%`, width: `${end - start}%` }}
                        >
                          <span className="sr-only">{period}</span>
                        </span>
                        <span className="row-duration" style={{ left: `${end}%` }}>{r.duration}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </figure>
          </div>
        </section>

        <section className="about wrap" aria-labelledby="about-heading">
          <h2 id="about-heading">Portfolio thinking, from the lab to the data layer</h2>
          <div className="about-grid">
            <div className="prose">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="work-on">
              <h3>What I work on</h3>
              <ul>
                {workOn.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="builds" className="builds wrap" aria-labelledby="builds-heading">
          <h2 id="builds-heading">What I&rsquo;ve built with AI</h2>
          <p className="section-lede">
            Each build is mapped to the stages of a working AI system it covers, from connecting to data through to the
            interface people use.
          </p>
          <div className="stage-head" aria-hidden="true">
            <span />
            <div className="stage-cells">
              {stages.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <ul className="build-list">
            {builds.map((b) => (
              <li key={b.name} className="build">
                <div className="build-copy">
                  <h3>
                    <a href={b.url} target="_blank" rel="noreferrer">{b.name}</a>
                  </h3>
                  <p>{b.summary}</p>
                  <p className="build-stack">{b.stack}</p>
                </div>
                <ul className="stage-cells" aria-label={`Stages covered: ${b.covers.join(", ")}`}>
                  {stages.map((s) => (
                    <li key={s} className={b.covers.includes(s) ? "cell on" : "cell"} aria-hidden="true">
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="credentials" className="credentials wrap" aria-labelledby="cred-heading">
          <h2 id="cred-heading">Credentials</h2>
          <div className="cred-grid">
            <div>
              <h3>Education</h3>
              <dl>
                {education.map((e) => (
                  <div key={e.school}>
                    <dt>{e.school}</dt>
                    <dd>{e.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3>Certifications</h3>
              <dl>
                {certifications.map((c) => (
                  <div key={c.name}>
                    <dt>{c.name}</dt>
                    <dd>{c.issuer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Have a portfolio question, or an AI idea worth testing? Let&rsquo;s talk.</h2>
            <div className="actions">
              <a className="btn btn-marigold" href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInMark /> Message me on LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                <GitHubMark /> Browse my GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href={otherSite.url}>View the classic layout of this site</a>
      </footer>
    </>
  );
}
