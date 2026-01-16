import EmailVerifyModal from './EmailVerifyModal.jsx'
import { useLoginForm } from '../hooks/index.js'
import './LoginForm.css'

function LoginForm() {
  const {
    form,
    status,
    isDisabled,
    verifyModalOpen,
    pendingEmail,
    onChange,
    onSubmit,
    onCloseVerifyModal,
    onResendVerification,
  } = useLoginForm()

  return (
    <>
      <form className="login-form" onSubmit={onSubmit}>
        <label className="login-form__field">
          <span className="sr-only">이메일 주소</span>
          <input
            name="email"
            type="email"
            autoComplete="username"
            placeholder="이메일 주소"
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label className="login-form__field">
          <span className="sr-only">비밀번호</span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호"
            value={form.password}
            onChange={onChange}
          />
        </label>

        {status.error ? <p className="login-form__error">{status.error}</p> : null}

        <button type="submit" className="login-form__submit" disabled={isDisabled}>
          {status.loading ? '로그인 중...' : '로그인'}
        </button>
      </form>

      <EmailVerifyModal
        open={verifyModalOpen}
        email={pendingEmail}
        onClose={onCloseVerifyModal}
        onResend={onResendVerification}
      />
    </>
  )
}

export default LoginForm
