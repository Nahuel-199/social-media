"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/redux/slices/authSlice";
import Logo from "@/components/atoms/Logo";
import Avatar from "@/components/atoms/Avatar";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";

interface FeedHeaderProps {
  user: User;
}

export default function FeedHeader({ user }: FeedHeaderProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar src={user.avatar} alt={user.name} size="sm" />
            <span className="hidden text-sm font-medium text-foreground sm:inline">
              {user.name}
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            title="Cerrar sesión"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
