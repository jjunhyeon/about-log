import Link from "next/link";
import { profile } from "../content";

const QUICK = [
  { href: "/profile", num: "01", title: "프로필", desc: "어떤 사람이고, 무엇을 잘하는지" },
  { href: "/career", num: "02", title: "이력", desc: "경력, 기술 스택, 자격증" },
  { href: "/projects", num: "03", title: "프로젝트", desc: "직접 맡아 온 일들" },
  { href: "/process", num: "04", title: "일하는 방식", desc: "진행 과정과 소통 약속" },
];

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow reveal">{profile.role} · {profile.company}</p>
      <h1 className="reveal d1">
        {profile.name}
        <span className="dot">.</span>
      </h1>
      <p className="headline reveal d2">{profile.headline}</p>

      <div className="cta reveal d2">
        <Link href="/contact" className="btn btn-primary">프로젝트 문의하기</Link>
        <Link href="/projects" className="btn">프로젝트 보기</Link>
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
        {QUICK.map((q) => (
          <Link key={q.href} href={q.href} className="door">
            <span className="door-num">{q.num}</span>
            <strong>{q.title}</strong>
            <span className="door-desc">{q.desc}</span>
            <span className="door-go">보기 →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
