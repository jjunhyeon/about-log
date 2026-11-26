import { profile, me } from "../../content";
import PageHead from "../components/PageHead";
import Text from "../components/Text";

export const metadata = { title: `프로필 · ${profile.name}` };

export default function ProfilePage() {
  return (
    <>
      <section className="page-head profile-head">
        {profile.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profile.photo} alt={`${profile.name} 프로필 사진`} className="profile-photo reveal" width="120" height="120" />
        )}
        <div>
          <p className="eyebrow reveal">프로필</p>
          <h1 className="page-title reveal d1">{profile.name}</h1>
          <p className="profile-role reveal d1">{profile.role} · {profile.company}</p>
        </div>
      </section>
      <p className="intro lead reveal d2">{me.intro}</p>

      <section className="section">
        <h2>강점</h2>
        <ul className="plain">
          {me.strengths.map((s) => <li key={s}><Text>{s}</Text></li>)}
        </ul>
      </section>

      <section className="section">
        <h2>이런 프로젝트를 잘합니다</h2>
        <div className="chips">
          {me.interests.map((i) => <span key={i} className="chip"><Text>{i}</Text></span>)}
        </div>
      </section>
    </>
  );
}
