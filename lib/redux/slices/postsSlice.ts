import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { PostsState, Post, Comment } from "@/types"

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload
      state.isLoading = false
      state.error = null
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload)
    },
    addComment: (state, action: PayloadAction<{ postId: string; comment: Comment }>) => {
      const post = state.posts.find((p) => p.id === action.payload.postId)
      if (post) {
        post.comments.push(action.payload.comment)
      }
    },
    toggleLike: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const post = state.posts.find((p) => p.id === action.payload.postId)
      if (post) {
        const likedIndex = post.likedBy.indexOf(action.payload.userId)
        if (likedIndex > -1) {
          post.likedBy.splice(likedIndex, 1)
          post.likesCount--
        } else {
          post.likedBy.push(action.payload.userId)
          post.likesCount++
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const { setPosts, addPost, addComment, toggleLike, setLoading, setError } = postsSlice.actions
export default postsSlice.reducer
