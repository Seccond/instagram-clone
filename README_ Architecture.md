# 아키텍처

[README](README.md) | [아키텍처](README_%20Architecture.md) | [Firebase](README_Firebase.md)

## 개요
React + Vite 기반 프론트와 Firebase(Auth/Firestore/Storage)를 사용합니다. 피드는 텍스트와 이미지 업로드를 포함합니다.

## 디렉토리 구조
```
src/
  app/            # App shell, 라우팅, 전역 프로바이더
    layouts/      # 공통 레이아웃
    route/        # 라우팅 구성
    providers/    # 전역 프로바이더/미들웨어
  pages/          # 페이지별 디렉토리 (feed, explore, reels, direct, notifications, auth, account)
  components/     # 공용 UI 컴포넌트 (SearchPanel, Modal, Input 등)
  features/       # 도메인별 기능 묶음 (auth, feed 등)
  services/       # Firebase 초기화 및 API 래퍼 (firebaseClient, authApi)
  store/          # 전역 상태 (Redux)
  hooks/          # 커스텀 훅
  styles/         # 전역 스타일
  assets/         # 이미지/아이콘
```

## 라우팅
- `/` 로그인
- `/feed`
- `/signup`
- `/explore`
- `/reels`
- `/direct/inbox`
- `/notifications`
- `/account/profile`
- 없는 경로: 로그인 여부에 따라 `/feed` 또는 `/`로 리다이렉트

## 검색 구성
- 검색은 라우터가 아닌 헤더 메뉴에서 토글되는 컴포넌트로 구성

## 상태 관리
- 로그인 사용자: 전역 상태 (Redux Toolkit)
- 유저 상태 슬라이스: uid, username, nickname, email, photoURL, bio
- 피드/검색: 로컬 상태 + 캐시 전략

## 기능 모듈 구조
```
features/<feature>/
  hooks/     # 비즈니스 로직 훅
  ui/        # UI 컴포넌트
  index.js   # 배럴
```

## 경로 별칭
- `@`: `src`
- `@app`, `@pages`, `@components`, `@features`, `@styles`, `@services`, `@store`, `@hooks`, `@assets`

## Firebase 사용 범위
- Auth: 회원가입/로그인/로그아웃
- Firestore: users, posts, follows
- Storage: 피드 이미지, 프로필 이미지

## 데이터 모델
- `users/{uid}`: email, name, nickname, phone, bio, photoURL, createdAt, updatedAt
- `posts/{postId}`: userId, username, profileImageUrl, caption, imageUrls, createdAt, likeCount, commentCount, location
  - `posts/{postId}/likes/{likeId}` (선택)
  - `posts/{postId}/comments/{commentId}` (선택)

## 보안 규칙 (요약)
- users: 본인만 생성/수정/삭제 가능, 로그인 사용자는 읽기 가능
- posts: 로그인 사용자만 생성/읽기 가능, 작성자만 수정/삭제 가능

## 배포
- Vercel 단일 프로젝트
- 환경 변수: Firebase config
