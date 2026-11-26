import { profile, me } from "../../content";
import PageHead from "../components/PageHead";

export const metadata = { title: `문의 · ${profile.name}` };

export default function ContactPage() {
  return (
    <>
      <PageHead
        eyebrow="문의"
        title="프로젝트 이야기를 들려주세요"
        intro="기획이 덜 정리되어 있어도 괜찮습니다. 하고 싶은 일을 편하게 적어 주시면 범위와 일정부터 함께 정리해 드립니다."
      >
        <div className="cta reveal d3">
          {profile.wishket && (
            <a href={profile.wishket} target="_blank" rel="noreferrer" className="btn btn-primary">위시켓에서 문의하기 ↗</a>
          )}
          {profile.email && <a href={`mailto:${profile.email}`} className="btn">{profile.email}</a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" className="btn">GitHub ↗</a>}
          {profile.responseNote && <p className="cta-note">{profile.responseNote}</p>}
        </div>
      </PageHead>

      <section className="section">
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
    </>
  );
}
