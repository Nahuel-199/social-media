# Red Social - Next.js 15 + Redux

Una red social moderna construida con Next.js 15, Redux Toolkit y Tailwind CSS 4.

## Características

- **Autenticación simulada**: Login con email/contraseña y Google (simulado)
- **Feed de publicaciones**: Visualización de posts con imágenes y comentarios
- **Interacciones**: Sistema de likes y comentarios en tiempo real
- **Estado global**: Gestión con Redux Toolkit + localStorage
- **SSR**: Páginas renderizadas en el servidor con Next.js 15
- **Diseño responsivo**: UI moderna con Tailwind CSS 4
- **Atomic Design**: Arquitectura de componentes escalable
- **TypeScript**: Interfaces centralizadas y tipado fuerte

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── feed/                     # Página del feed
│   ├── login/                    # Página de login
│   └── layout.tsx                # Layout principal con Redux Provider
├── components/
│   ├── atoms/                    # Componentes básicos (Avatar, Input, Logo)
│   ├── molecules/                # Componentes compuestos (PostCard, LoginForm, etc.)
│   └── organisms/                # Componentes complejos (FeedList, LoginCard)
├── lib/
│   ├── redux/                    # Store y slices de Redux
│   │   ├── store.ts              # Configuración del store
│   │   ├── slices/authSlice.ts   # Estado de autenticación
│   │   └── slices/postsSlice.ts  # Estado de posts y comentarios
│   ├── mockData.ts               # Datos de prueba
│   └── utils.ts                  # Utilidades
└── types/
    └── index.ts                  # Interfaces TypeScript centralizadas
\`\`\`

## Tecnologías

- **Next.js 15**: Framework React con App Router
- **Redux Toolkit**: Gestión de estado global
- **Tailwind CSS 4**: Estilos con diseño moderno
- **TypeScript**: Tipado estático
- **Atomic Design**: Arquitectura de componentes

## Uso

### Login

1. Accede a `/login`
2. Usa cualquier email y contraseña (mínimo 6 caracteres)
3. O haz clic en "Continuar con Google" para simular login social
4. Serás redirigido automáticamente al feed

### Feed

- **Crear post**: Escribe en el formulario superior (máx. 500 caracteres) y haz clic en "Publicar"
- **Dar like**: Haz clic en el ícono de corazón (se actualiza en tiempo real)
- **Ver comentarios**: Haz clic en el ícono de comentarios para expandir
- **Comentar**: Escribe tu comentario (máx. 200 caracteres) y presiona Enter o haz clic en enviar
- **Cerrar sesión**: Haz clic en el ícono de logout en el header

## Validaciones

- **Email**: Formato válido requerido (ejemplo@dominio.com)
- **Contraseña**: Mínimo 6 caracteres
- **Posts**: Máximo 500 caracteres, no puede estar vacío
- **Comentarios**: Máximo 200 caracteres, no puede estar vacío

## Estado Global (Redux)

### Auth Slice
- `user`: Información del usuario autenticado
- `isAuthenticated`: Estado de autenticación
- `isLoading`: Estado de carga
- Persistencia en localStorage

### Posts Slice
- `posts`: Lista de todas las publicaciones
- `addPost`: Agregar nueva publicación
- `toggleLike`: Dar/quitar like a un post
- `addComment`: Agregar comentario a un post

## Protección de Rutas

Las páginas verifican la autenticación usando Redux:
- `/feed` - Redirige a `/login` si no está autenticado
- `/login` - Redirige a `/feed` si ya está autenticado
- Estado restaurado automáticamente desde localStorage

## Características Técnicas

- **Client-side rendering** para interacciones en tiempo real
- **Redux Toolkit** para estado predecible y debugging
- **localStorage** para persistencia de sesión
- **Atomic Design** para componentes reutilizables
- **TypeScript** con interfaces centralizadas
- **Tailwind CSS 4** con tokens de diseño personalizados

## Notas

- La autenticación es completamente simulada (no requiere backend)
- Los posts y comentarios se almacenan en Redux (persisten en la sesión)
- El usuario se guarda en localStorage (persiste entre recargas)
- Para producción, conecta con una API real y base de datos
- Compatible con Next.js 15 y React 19
