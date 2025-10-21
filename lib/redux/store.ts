import { configureStore } from "@reduxjs/toolkit"
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import authReducer from "./slices/authSlice"
import postsReducer from "./slices/postsSlice"
import type { RootState } from "@/types"

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      posts: postsReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
