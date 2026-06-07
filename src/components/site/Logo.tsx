import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "onPrimary";
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const textColor = variant === "onPrimary" ? "text-primary-foreground" : "text-foreground";
  const subColor = variant === "onPrimary" ? "text-primary-foreground/70" : "text-muted-foreground";
  const bg = variant === "onPrimary" ? "bg-primary-foreground/10" : "bg-cream";

  return (
    <Link to="/" className="flex items-center gap-3" aria-label="תיכון מל״ד - דף הבית">
      <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${bg} shadow-soft`}>
        <span className={`text-lg font-bold ${textColor}`}>מל״ד</span>
        <Heart
          className="absolute -top-1 -left-1 h-4 w-4"
          fill="#E81820"
          stroke="#E81820"
          aria-hidden
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-base md:text-lg font-bold ${textColor}`}>תיכון מל״ד</span>
        <span className={`text-[11px] md:text-xs ${subColor}`}>בית ספר שהוא בית · ירושלים</span>
      </span>
    </Link>
  );
};

export default Logo;
