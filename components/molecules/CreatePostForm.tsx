"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Textarea from "@/components/atoms/Textarea";
import Avatar from "@/components/atoms/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/types";

interface CreatePostFormProps {
  user: User;
  onSubmit: (content: string) => void;
}

export default function CreatePostForm({
  user,
  onSubmit,
}: CreatePostFormProps) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("El contenido no puede estar vacío");
      return;
    }

    if (content.length > 500) {
      setError("El contenido no puede exceder 500 caracteres");
      return;
    }

    onSubmit(content);
    setContent("");
    setError("");
  };

  return (
    <Card className="border-border/50">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <Avatar src={user.avatar} alt={user.name} size="md" />
            <div className="flex-1">
              <Textarea
                placeholder="¿Qué estás pensando?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                error={error}
                rows={3}
                className="resize-none"
              />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {content.length}/500
                </span>
                <Button type="submit" size="sm" disabled={!content.trim()}>
                  <Send className="mr-2 h-4 w-4" />
                  Publicar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
