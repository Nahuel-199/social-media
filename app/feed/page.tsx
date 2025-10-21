"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { hydrateAuth } from "@/lib/redux/slices/authSlice";
import FeedHeader from "@/components/molecules/FeedHeader";
import FeedList from "@/components/organisms/FeedList";
import { RootState } from "@/types";

export default function FeedPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    dispatch(hydrateAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-muted-foreground">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <FeedHeader user={user} />

      <main className="container mx-auto max-w-3xl px-4 py-8">
        <FeedList currentUser={user} />
      </main>
    </div>
  );
}
