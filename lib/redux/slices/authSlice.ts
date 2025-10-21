import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { AuthState, User } from "@/types"

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isLoading = false
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isLoading = false

      if (typeof window !== "undefined") {
        localStorage.removeItem("user")
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    hydrateAuth: (state) => {
      if (typeof window !== "undefined") {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
          state.user = JSON.parse(savedUser)
          state.isAuthenticated = true
        }
      }
      state.isLoading = false
    },
  },
})

export const { setUser, logout, setLoading, hydrateAuth } = authSlice.actions
export default authSlice.reducer
