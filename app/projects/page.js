import { profile, dev } from "../../content";
import PageHead from "../components/PageHead";
import Text from "../components/Text";

export const metadata = { title: `프로젝트 · ${profile.name}` };

export default function ProjectsPage() {
  return (
    <>
      <PageHead eyebrow="프로젝트" title="직접 맡아 온 일들" intro="요구사항 정리부터 오픈 후 운영까지, 실제로 담당한 범위를 적었습니다." />
      <section className="section">
        <div className="projects">
          {dev.projects.map((p) => (
            <article key={p.name} className="project">
              <div className="project-head">
                <h3>
                  {p.url ? <a href={p.url} target="_blank" rel="noreferrer">{p.name} ↗</a> : p.name}
                </h3>
                <span className="period">{p.period}</span>
              </div>
              <p className="role-tag"><Text>{p.role}</Text></p>
              <p>{p.summary}</p>
              <ul>
                {p.points.map((pt) => <li key={pt}><Text>{pt}</Text></li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
