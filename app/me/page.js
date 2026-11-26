import { profile, me } from "../../content";
import Text from "../components/Text";

export const metadata = { title: `일하는 방식 · ${profile.name}` };

export default function MePage() {
  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow reveal">01 · 일하는 방식</p>
        <h1 className="page-title reveal d1">{me.title}</h1>
        <p className="intro reveal d2">{me.intro}</p>
      </section>

      <section className="wrap section">
        <h2>진행 과정</h2>
        <div className="grid traits">
          {me.traits.map((t) => (
            <article key={t.title} className="card">
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>강점과 약속</h2>
        <div className="grid two">
          <div className="card">
            <h3>강점</h3>
            <ul className="plain">
              {me.strengths.map((s) => <li key={s}><Text>{s}</Text></li>)}
            </ul>
          </div>
          <div className="card">
            <h3>소통 약속</h3>
            <ul className="plain">
              {me.growing.map((s) => <li key={s}><Text>{s}</Text></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <h2>작업 조건</h2>
        <dl className="routine">
          {me.routine.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap section">
        <h2>이런 프로젝트를 잘합니다</h2>
        <div className="chips">
          {me.interests.map((i) => <span key={i} className="chip"><Text>{i}</Text></span>)}
        </div>
      </section>
    </>
  );
}
