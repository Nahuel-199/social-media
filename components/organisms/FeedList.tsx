"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  setPosts,
  toggleLike,
  addPost,
  addComment,
} from "@/lib/redux/slices/postsSlice";
import PostCard from "@/components/molecules/PostCard";
import CreatePostForm from "@/components/molecules/CreatePostForm";
import { mockPosts } from "@/lib/mockData";
import type { User, Post, Comment } from "@/types";

interface FeedListProps {
  currentUser: User;
}

export default function FeedList({ currentUser }: FeedListProps) {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(setPosts(mockPosts));
  }, [dispatch]);

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      userId: currentUser.id,
      user: currentUser,
      content,
      createdAt: new Date().toISOString(),
      comments: [],
      likesCount: 0,
      likedBy: [],
    };

    dispatch(addPost(newPost));
  };

  const handleLike = (postId: string) => {
    dispatch(toggleLike({ postId, userId: currentUser.id }));
  };

  const handleComment = (postId: string, content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      userId: currentUser.id,
      user: currentUser,
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addComment({ postId, comment: newComment }));
  };

  return (
    <div className="space-y-6">
      <CreatePostForm user={currentUser} onSubmit={handleCreatePost} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}
