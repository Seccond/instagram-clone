import { useEffect } from 'react'

function UserMiddleware({ children }) {
  // TODO: Firebase Auth 상태 변화 구독 로직 연결 예정
  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   dispatch(setUser(...))
    // })
  }, [])

  return children
}

export default UserMiddleware
