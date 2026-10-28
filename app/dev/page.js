import { profile, dev } from "../../content";
import Text, { isTodo } from "../components/Text";

export const metadata = { title: `개발자의 나 · ${profile.name}` };

export default function DevPage() {
  const hasContact = profile.email || profile.github;
  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow">02 · 개발자의 나</p>
        <h1 className="page-title">{dev.title}</h1>
        <p className="intro">{dev.intro}</p>
      </section>

      <section className="wrap section">
        <h2>프로젝트</h2>
        <div className="projects">
          {dev.projects.map((p) => (
            <article key={p.name} className="project">
              <div className="project-head">
                <h3>
                  {p.url ? <a href={p.url} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}
                </h3>
                <span className="period">{p.period}</span>
              </div>
              <p className="role-tag">{p.role}</p>
              <p>{p.summary}</p>
              <ul>
                {p.points.map((pt) => <li key={pt}><Text>{pt}</Text></li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>기술 스택</h2>
        <div className="grid skills">
          {dev.skills.map((s) => (
            <div key={s.group} className="card">
              <h3>{s.group}</h3>
              <div className="chips">
                {s.items.map((i) => (
                  <span key={i} className={isTodo(i) ? "chip todo" : "chip"}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>경력</h2>
        <ol className="timeline">
          {dev.career.map((c) => (
            <li key={c.org + c.period}>
              <span className="period"><Text>{c.period}</Text></span>
              <strong>{c.org}</strong>
              <span>{c.role}</span>
            </li>
          ))}
        </ol>
      </section>

      {hasContact && (
        <section className="wrap section">
          <h2>연락처</h2>
          <div className="contact">
            {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </section>
      )}
    </>
  );
}
