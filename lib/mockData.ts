import type { Post, User } from "@/types"

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana García",
    email: "ana@example.com",
    username: "@anagarcia",
    avatar: "/woman-profile.png",
  },
  {
    id: "2",
    name: "Carlos Ruiz",
    email: "carlos@example.com",
    username: "@carlosruiz",
    avatar: "/man-profile.png",
  },
  {
    id: "3",
    name: "María López",
    email: "maria@example.com",
    username: "@marialopez",
    avatar: "/diverse-woman-smiling.png",
  },
]

export const mockPosts: Post[] = [
  {
    id: "1",
    userId: "1",
    user: mockUsers[0],
    content: "¡Acabo de lanzar mi nuevo proyecto! Estoy muy emocionada de compartirlo con todos ustedes. 🚀",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    comments: [
      {
        id: "1",
        postId: "1",
        userId: "2",
        user: mockUsers[1],
        content: "¡Felicidades! Se ve increíble 👏",
        createdAt: new Date(Date.now() - 1800000).toISOString(),
      },
    ],
    likesCount: 24,
    likedBy: ["2", "3"],
  },
  {
    id: "2",
    userId: "2",
    user: mockUsers[1],
    content: "Hermoso atardecer hoy en la ciudad. A veces hay que detenerse y apreciar las pequeñas cosas. 🌅",
    imageUrl: "/sunset-city.png",
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    comments: [
      {
        id: "2",
        postId: "2",
        userId: "3",
        user: mockUsers[2],
        content: "¡Qué foto tan hermosa!",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: "3",
        postId: "2",
        userId: "1",
        user: mockUsers[0],
        content: "Me encanta la composición 📸",
        createdAt: new Date(Date.now() - 1800000).toISOString(),
      },
    ],
    likesCount: 42,
    likedBy: ["1", "3"],
  },
  {
    id: "3",
    userId: "3",
    user: mockUsers[2],
    content: "Reflexión del día: El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. 💭",
    createdAt: new Date(Date.now() - 10800000).toISOString(),
    comments: [],
    likesCount: 18,
    likedBy: ["1"],
  },
]
