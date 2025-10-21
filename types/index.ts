export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  username: string
}

export interface Comment {
  id: string
  postId: string
  userId: string
  user: User
  content: string
  createdAt: string
}

export interface Post {
  id: string
  userId: string
  user: User
  content: string
  imageUrl?: string
  createdAt: string
  comments: Comment[]
  likesCount: number
  likedBy: string[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface PostsState {
  posts: Post[]
  isLoading: boolean
  error: string | null
}

export interface RootState {
  auth: AuthState
  posts: PostsState
}
