import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/feed" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
        <span className="text-lg font-bold text-primary-foreground">S</span>
      </div>
      <span className="text-xl font-semibold text-foreground">Social</span>
    </Link>
  );
}
