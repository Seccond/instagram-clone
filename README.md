# 인스타그램 클론코딩

[README](README.md) | [Architecture](README_%20Architecture.md) | [Firebase](README_Firebase.md)

## 프로젝트 개요
- 주제: 인스타그램 클론코딩
- 기간: 1주
- 인원: 3인
- 피드 게시: 텍스트 + 이미지

## 구현 기능
- 회원가입
- 로그인
- 피드 게시
- 유저 검색
- 프로필

## 기술 스택
- 형상관리: GitHub
- 프론트엔드: React, Vite
- 백엔드/인증/DB: Firebase (Auth, Firestore, Storage)
- 배포: Vercel

## 역할 분담
- 박제하: API
- 조건우: 화면(UI)
- 홍기현: 아키텍처

## 문서
- 아키텍처 상세: [README_%20Architecture.md](README_%20Architecture.md)

## 아키텍처 요약
- 레이어 의존성: app/pages → features → components → core(services/utils)
- 기능 모듈: `src/features/<feature>`에서 `ui/`, `hooks/`, `index.js` 배럴로 관리
- 라우터: `src/app/route/route.jsx` (없는 경로는 로그인 상태에 따라 리다이렉트)

## 기능 구현 현황
- 인증
  - 회원가입/로그인 (이메일 인증 필수)
  - 가입 시 `users/{uid}` 프로필 저장, 실패 시 재시도
  - 로그인 후 UserMiddleware에서 프로필 보완
- 피드
  - posts 컬렉션 조회 및 카드 렌더링
  - 게시물 상세 모달 UI
  - “만들기” 모달 3단계 (선택/편집/작성) UI 및 업로드 로직
- 레이아웃
  - RootLayout 헤더/검색 패널/더보기 모달
  - 인증 필요 시 안내 모달 후 로그인 페이지로 폴백

## 데이터 구조(요약)
- `users/{uid}`: email, name, nickname, phone, bio, photoURL, createdAt, updatedAt
- `posts/{postId}`: userId, username, profileImageUrl, caption, imageUrls, createdAt, likeCount, commentCount, location
  - `posts/{postId}/likes/{likeId}` (선택)
  - `posts/{postId}/comments/{commentId}` (선택)

## 환경 변수
`.env.example`를 복사해 `.env`를 만들고 Firebase 설정값을 입력합니다.
Firestore는 `(default)` DB가 생성되어 있어야 동작합니다.

## 실행
```bash
npm install
npm run dev
```
