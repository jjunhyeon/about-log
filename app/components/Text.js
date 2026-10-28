export const isTodo = (s) => typeof s === "string" && s.includes("[입력 필요]");

export default function Text({ children }) {
  return isTodo(children) ? <span className="todo">{children}</span> : children;
}
