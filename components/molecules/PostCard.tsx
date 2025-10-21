"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import UserInfo from "@/components/molecules/UserInfo";
import CommentForm from "@/components/molecules/CommentForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Post, User } from "@/types";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
  currentUser: User;
}

export default function PostCard({
  post,
  onLike,
  onComment,
  currentUser,
}: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const isLiked = post.likedBy.includes(currentUser.id);

  return (
    <Card className="border-border/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <UserInfo user={post.user} timestamp={post.createdAt} />

          <p className="text-base leading-relaxed text-foreground">
            {post.content}
          </p>

          {post.imageUrl && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt="Post image"
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-6 border-t border-border pt-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2 text-muted-foreground hover:text-foreground",
                isLiked && "text-red-500 hover:text-red-600"
              )}
              onClick={() => onLike(post.id)}
            >
              <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
              <span className="text-sm font-medium">{post.likesCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">
                {post.comments.length}
              </span>
            </Button>
          </div>

          {showComments && (
            <div className="space-y-4">
              {post.comments.length > 0 && (
                <div className="space-y-4 border-t border-border pt-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="flex-1 space-y-1">
                        <UserInfo
                          user={comment.user}
                          timestamp={comment.createdAt}
                          showUsername={false}
                        />
                        <p className="text-sm leading-relaxed text-foreground">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <CommentForm
                user={currentUser}
                postId={post.id}
                onSubmit={onComment}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
