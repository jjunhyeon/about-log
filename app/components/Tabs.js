"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../../content";

const TABS = [
  { href: "/me", label: "일하는 방식" },
  { href: "/dev", label: "경력과 기술" },
];

export default function Tabs() {
  const path = usePathname();
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="logo">{profile.nameEn}</Link>
        <nav className="tabs" aria-label="페이지">
          {TABS.map((t) => {
            const active = path.startsWith(t.href);
            return (
              <Link key={t.href} href={t.href} className={active ? "tab active" : "tab"} aria-current={active ? "page" : undefined}>
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
