"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Input from "@/components/atoms/Input";
import Avatar from "@/components/atoms/Avatar";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";

interface CommentFormProps {
  user: User;
  postId: string;
  onSubmit: (postId: string, content: string) => void;
}

export default function CommentForm({
  user,
  postId,
  onSubmit,
}: CommentFormProps) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("El comentario no puede estar vacío");
      return;
    }

    if (content.length > 200) {
      setError("El comentario no puede exceder 200 caracteres");
      return;
    }

    onSubmit(postId, content);
    setContent("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-t border-border pt-4"
    >
      <Avatar src={user.avatar} alt={user.name} size="sm" />
      <div className="flex-1">
        <div className="flex gap-2">
          <Input
            placeholder="Escribe un comentario..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            error={error}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!content.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}
