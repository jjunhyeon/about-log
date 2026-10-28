import { profile, me } from "../../content";
import Text from "../components/Text";

export const metadata = { title: `나 분석 · ${profile.name}` };

export default function MePage() {
  return (
    <>
      <section className="page-head wrap">
        <p className="eyebrow">01 · 나 분석</p>
        <h1 className="page-title">{me.title}</h1>
        <p className="intro">{me.intro}</p>
      </section>

      <section className="wrap section">
        <h2>일하는 방식</h2>
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
        <h2>강점과 키우는 중인 것</h2>
        <div className="grid two">
          <div className="card">
            <h3>강점</h3>
            <ul className="plain">
              {me.strengths.map((s) => <li key={s}><Text>{s}</Text></li>)}
            </ul>
          </div>
          <div className="card">
            <h3>키우는 중</h3>
            <ul className="plain">
              {me.growing.map((s) => <li key={s}><Text>{s}</Text></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <h2>루틴</h2>
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
        <h2>관심사</h2>
        <div className="chips">
          {me.interests.map((i) => <span key={i} className="chip"><Text>{i}</Text></span>)}
        </div>
      </section>
    </>
  );
}
