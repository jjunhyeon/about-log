import Link from "next/link";
import { profile, me, dev } from "../content";

export default function Home() {
  return (
    <section className="hero wrap">
      <p className="eyebrow">{profile.role} · {profile.company}</p>
      <h1>
        {profile.name}
        <span className="dot">.</span>
      </h1>
      <p className="headline">{profile.headline}</p>

      <div className="doors">
        <Link href="/me" className="door">
          <span className="door-num">01</span>
          <strong>나 분석</strong>
          <span className="door-desc">{me.tagline}</span>
          <span className="door-go">들어가기 →</span>
        </Link>
        <Link href="/dev" className="door door-dark">
          <span className="door-num">02</span>
          <strong>개발자의 나</strong>
          <span className="door-desc">{dev.tagline}</span>
          <span className="door-go">들어가기 →</span>
        </Link>
      </div>
    </section>
  );
}
