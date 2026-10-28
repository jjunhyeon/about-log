import "./globals.css";
import Tabs from "./components/Tabs";
import { profile } from "../content";

export const metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.headline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>
        <Tabs />
        <main>{children}</main>
        <footer className="wrap footer">© {new Date().getFullYear()} {profile.name}</footer>
      </body>
    </html>
  );
}
