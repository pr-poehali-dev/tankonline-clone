import {
  Home,
  Play,
  Download,
  Zap,
  Shield,
  Target,
  Users,
  Gamepad2,
  Trophy,
  ArrowRight,
  Newspaper,
  User,
  Lock,
  Mail,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap = {
  Home,
  Play,
  Download,
  Zap,
  Shield,
  Target,
  Users,
  Gamepad2,
  Trophy,
  ArrowRight,
  Newspaper,
  User,
  Lock,
  Mail,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    iconMap[name as keyof typeof iconMap] ||
    iconMap[fallback as keyof typeof iconMap];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
