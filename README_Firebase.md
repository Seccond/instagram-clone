# Firebase Guide

[README](README.md) | [Architecture](README_%20Architecture.md) | [Firebase](README_Firebase.md)

## 목적
Firebase 설정/인증/DB 사용 흐름을 빠르게 공유하기 위한 문서입니다.

## 환경 변수
`.env.example`을 복사해 `.env`를 만들고 값을 채웁니다.

필수 값:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

## 초기화 위치
- `src/services/firebaseClient.js`
  - `auth`, `db`, `storage` export

## 인증 흐름 (현재)
- 회원가입: 이메일/비밀번호 → 인증 메일 발송 → users 프로필 저장 → 로그아웃
- 로그인: 이메일 인증 미완료 시 `EMAIL_NOT_VERIFIED` 반환
- 로그인 후: UserMiddleware에서 프로필 보완

관련 파일:
- `src/services/authApi.js`
- `src/app/providers/UserMiddleware.jsx`

## Firestore 컬렉션
- `users/{uid}`: email, name, nickname, phone, bio, photoURL, createdAt, updatedAt
- `posts/{postId}`: userId, username, profileImageUrl, caption, imageUrls, createdAt, likeCount, commentCount, location
- `posts/{postId}/likes/{likeId}` (선택)
- `posts/{postId}/comments/{commentId}` (선택)

## Storage
- 피드 이미지, 프로필 이미지 저장 용도

## 주의사항
- `.env`는 커밋하지 않습니다.
- Firestore `(default)` DB가 없으면 `NOT_FOUND` 에러가 발생합니다.
- Database 생성 후 rules를 다시 적용해야 합니다.

## Firestore 초기 설정
1. Firebase 콘솔 → Firestore Database → 데이터베이스 만들기
2. Native mode 선택
3. region 선택 후 생성
4. Rules 탭에서 보안 규칙 적용
