"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../../content";

export const MENU = [
  { href: "/", label: "홈" },
  { href: "/profile", label: "프로필" },
  { href: "/career", label: "이력" },
  { href: "/projects", label: "프로젝트" },
  { href: "/process", label: "일하는 방식" },
  { href: "/contact", label: "문의" },
];

export default function Sidebar() {
  const path = usePathname();
  const isActive = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <aside className="side">
      <Link href="/" className="side-id">
        {profile.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.photo} alt="" className="side-avatar" width="44" height="44" />
        )}
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </Link>

      <nav className="side-nav" aria-label="메뉴">
        {MENU.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className={isActive(m.href) ? "side-link active" : "side-link"}
            aria-current={isActive(m.href) ? "page" : undefined}
          >
            {m.label}
          </Link>
        ))}
      </nav>

      {profile.status && (
        <p className="side-status">
          <span className="pulse" />
          {profile.status}
        </p>
      )}
    </aside>
  );
}
