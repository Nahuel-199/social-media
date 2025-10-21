import Avatar from "@/components/atoms/Avatar";
import type { User } from "@/types";

interface UserInfoProps {
  user: User;
  timestamp?: string;
  showUsername?: boolean;
}

export default function UserInfo({
  user,
  timestamp,
  showUsername = true,
}: UserInfoProps) {
  const formatTimestamp = (date: string) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInHours = Math.floor(
      (now.getTime() - postDate.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Hace unos minutos";
    if (diffInHours < 24) return `Hace ${diffInHours}h`;
    if (diffInHours < 48) return "Ayer";
    return `Hace ${Math.floor(diffInHours / 24)}d`;
  };

  return (
    <div className="flex items-center gap-3">
      <Avatar src={user.avatar} alt={user.name} size="md" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">
          {user.name}
        </span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {showUsername && <span>{user.username}</span>}
          {timestamp && (
            <>
              {showUsername && <span>•</span>}
              <span>{formatTimestamp(timestamp)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
