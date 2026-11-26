import { profile, me } from "../../content";
import PageHead from "../components/PageHead";
import Text from "../components/Text";

export const metadata = { title: `일하는 방식 · ${profile.name}` };

export default function ProcessPage() {
  return (
    <>
      <PageHead eyebrow="일하는 방식" title={me.title} intro="처음 연락부터 오픈 이후까지 이렇게 진행합니다." />

      {me.proof && (
        <section className="proof reveal d3">
          <div className="proof-num">
            <b>{me.proof.value}</b>
            <span>{me.proof.label}</span>
          </div>
          <div>
            <h2>{me.proof.title}</h2>
            <p>{me.proof.body}</p>
          </div>
        </section>
      )}

      <section className="section">
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

      <section className="section">
        <h2>소통 약속</h2>
        <ul className="plain">
          {me.growing.map((s) => <li key={s}><Text>{s}</Text></li>)}
        </ul>
      </section>
    </>
  );
}
