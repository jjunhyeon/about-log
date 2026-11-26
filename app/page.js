import Link from "next/link";
import { profile, me, dev } from "../content";

export default function Home() {
  return (
    <section className="hero wrap">
      <div className="hero-top reveal">
        {profile.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.photo} alt={`${profile.name} 프로필 사진`} className="avatar" width="64" height="64" />
        )}
        {profile.status && (
          <span className="badge">
            <span className="pulse" />
            {profile.status}
          </span>
        )}
      </div>
      <p className="eyebrow reveal d1">{profile.role} · {profile.company}</p>
      <h1 className="reveal d1">
        <span className="grad-text">{profile.name}</span>
        <span className="dot">.</span>
      </h1>
      <p className="headline reveal d2">{profile.headline}</p>

      <div className="cta reveal d2">
        {profile.wishket && (
          <a href={profile.wishket} target="_blank" rel="noreferrer" className="btn btn-primary">
            위시켓에서 문의하기 ↗
          </a>
        )}
        <Link href="/dev" className="btn">프로젝트 보기</Link>
        {profile.responseNote && <p className="cta-note">{profile.responseNote}</p>}
      </div>

      {profile.stats && (
        <div className="stats reveal d3">
          {profile.stats.map((s) => (
            <div key={s.label} className="stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="doors reveal d4">
        <Link href="/me" className="door">
          <span className="door-num">01</span>
          <strong>일하는 방식</strong>
          <span className="door-desc">{me.tagline}</span>
          <span className="door-go">들어가기 →</span>
        </Link>
        <Link href="/dev" className="door door-dark">
          <span className="door-num">02</span>
          <strong>경력과 기술</strong>
          <span className="door-desc">{dev.tagline}</span>
          <span className="door-go">들어가기 →</span>
        </Link>
      </div>
    </section>
  );
}
