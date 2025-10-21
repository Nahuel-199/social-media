"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "@/lib/redux/slices/authSlice";
import { mockUsers } from "@/lib/mockData";
import Input from "@/components/atoms/Input";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmailState] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoadingState] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(email)) {
      newErrors.email = "El formato del email no es válido";
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoadingState(true);
    dispatch(setLoading(true));

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      let user = mockUsers.find((u) => u.email === email);

      if (!user) {
        user = {
          id: Date.now().toString(),
          name: email.split("@")[0],
          email: email,
          avatar: "/diverse-user-avatars.png",
          username: email.split("@")[0],
        };
      }

      dispatch(setUser(user));
      onSuccess?.();
      router.push("/feed");
    } catch (error) {
      console.error("[v0] Login error:", error);
      setErrors({ email: "Error al iniciar sesión" });
    } finally {
      setIsLoadingState(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmailState(e.target.value)}
          error={errors.email}
          disabled={isLoading}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Contraseña
        </label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={isLoading}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </Button>
    </form>
  );
}
