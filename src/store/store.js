import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'

const logger = (storeApi) => (next) => (action) => {
  const result = next(action)
  const state = storeApi.getState()
  console.log('[store]', action.type, state)
  return result
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
