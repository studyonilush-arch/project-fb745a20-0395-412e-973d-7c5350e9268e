import { Link } from "react-router-dom";
import logoAsset from "@/assets/mald-logo-symbol.png.asset.json";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="תיכון מל״ד - דף הבית">
      <img
        src={logoAsset.url}
        alt="לוגו תיכון מל״ד"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
};

export default Logo;
