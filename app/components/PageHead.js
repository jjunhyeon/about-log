export default function PageHead({ eyebrow, title, intro, children }) {
  return (
    <section className="page-head">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h1 className="page-title reveal d1">{title}</h1>
      {intro && <p className="intro reveal d2">{intro}</p>}
      {children}
    </section>
  );
}
