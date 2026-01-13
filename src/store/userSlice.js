import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uid: null,
  username: '',
  nickname: '',
  email: '',
  photoURL: '',
  bio: '',
  isAuthenticated: false,
  status: 'idle',
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { uid, username, nickname, email, photoURL, bio } = action.payload
      state.uid = uid || null
      state.username = username || ''
      state.nickname = nickname || ''
      state.email = email || ''
      state.photoURL = photoURL || ''
      state.bio = bio || ''
      state.isAuthenticated = Boolean(uid)
      state.status = 'succeeded'
      state.error = null
    },
    clearUser(state) {
      state.uid = null
      state.username = ''
      state.nickname = ''
      state.email = ''
      state.photoURL = ''
      state.bio = ''
      state.isAuthenticated = false
      state.status = 'idle'
      state.error = null
    },
    setUserStatus(state, action) {
      state.status = action.payload
    },
    setUserError(state, action) {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export const { setUser, clearUser, setUserStatus, setUserError } = userSlice.actions

export default userSlice.reducer
