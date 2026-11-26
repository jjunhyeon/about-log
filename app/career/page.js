import { profile, dev } from "../../content";
import PageHead from "../components/PageHead";
import Text, { isTodo } from "../components/Text";

export const metadata = { title: `이력 · ${profile.name}` };

export default function CareerPage() {
  return (
    <>
      <PageHead eyebrow="이력" title={dev.title} intro={dev.intro} />

      <section className="section">
        <h2>경력</h2>
        <ol className="timeline">
          {dev.career.map((c) => (
            <li key={c.org + c.period}>
              <span className="period"><Text>{c.period}</Text></span>
              <strong><Text>{c.org}</Text></strong>
              <span>{c.role}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
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

      <section className="section">
        <h2>자격증</h2>
        <ol className="timeline">
          {dev.certifications.map((c) => (
            <li key={c.name}>
              <span className="period">{c.date}</span>
              <strong>{c.name}</strong>
              <span>{c.org}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
