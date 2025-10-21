import Logo from "@/components/atoms/Logo";
import LoginForm from "@/components/molecules/LoginForm";
import SocialLogin from "@/components/molecules/SocialLogin";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-md border-border/50 shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold">
            Bienvenido de vuelta
          </CardTitle>
          <CardDescription className="mt-2">
            Inicia sesión para conectar con tu comunidad
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <LoginForm />
        <SocialLogin />
        <p className="text-center text-xs text-muted-foreground">
          Usa cualquier email y contraseña para probar la aplicación
        </p>
      </CardContent>
    </Card>
  );
}
