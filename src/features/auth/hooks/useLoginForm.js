import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithEmail, resendVerificationEmail } from '@services/authApi.js'

const getDefaultState = () => ({
  email: '',
  password: '',
})

export const useLoginForm = () => {
  const [form, setForm] = useState(getDefaultState)
  const [status, setStatus] = useState({ loading: false, error: '' })
  const [verifyModalOpen, setVerifyModalOpen] = useState(false)
  const [pendingCredentials, setPendingCredentials] = useState(null)
  const navigate = useNavigate()

  const isDisabled = useMemo(() => {
    return !form.email.trim() || !form.password.trim() || status.loading
  }, [form.email, form.password, status.loading])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '' })

    const result = await loginWithEmail({
      email: form.email.trim(),
      password: form.password.trim(),
    })

    if (!result.ok) {
      if (result.code === 'EMAIL_NOT_VERIFIED') {
        setPendingCredentials({
          email: form.email.trim(),
          password: form.password.trim(),
        })
        setVerifyModalOpen(true)
        setStatus({ loading: false, error: '' })
        return
      }

      setStatus({ loading: false, error: result.error || 'Login failed.' })
      return
    }

    setStatus({ loading: false, error: '' })
    navigate(result.redirectUrl || '/feed')
  }

  const onResendVerification = async () => {
    if (!pendingCredentials) return
    setStatus({ loading: true, error: '' })
    const result = await resendVerificationEmail(pendingCredentials)
    setStatus({
      loading: false,
      error: result.ok ? '' : result.error || 'Failed to resend verification.',
    })
  }

  return {
    form,
    status,
    isDisabled,
    verifyModalOpen,
    pendingEmail: pendingCredentials?.email,
    onChange,
    onSubmit,
    onCloseVerifyModal: () => setVerifyModalOpen(false),
    onResendVerification,
  }
}
