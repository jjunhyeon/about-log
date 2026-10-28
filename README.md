# 김준현 포트폴리오

Next.js 14 한 페이지 포트폴리오. 모든 문구는 `content.js` 한 파일에서 고칩니다.

## 처음 올리기 (GitHub → Vercel)

```bash
cd junhyun-portfolio
git init && git add . && git commit -m "init portfolio"
git branch -M main
git remote add origin git@github.com:<아이디>/<저장소>.git
git push -u origin main
```

그다음 vercel.com → Add New → Project → 이 저장소 Import → Deploy (설정은 기본값 그대로).

## 수정

1. `content.js`에서 `[입력 필요]` 부분을 채우거나 문구를 수정
2. `git commit -am "update" && git push` → Vercel이 자동으로 다시 배포

## 로컬 확인 (선택)

```bash
npm install
npm run dev   # http://localhost:3000
```
