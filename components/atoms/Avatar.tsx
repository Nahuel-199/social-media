import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export default function Avatar({
  src,
  alt,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-muted",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
          <span className="text-sm font-medium">
            {alt.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );
}
