import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
    <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 font-display text-lg font-bold">
            מל״ד
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg font-bold">תיכון מל״ד</p>
            <p className="text-sm text-primary-foreground/70">בית ספר שהוא בית</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
          מרכז למידה דתי בירושלים לנערים ונערות בכיתות י-יב.
          התחלה חדשה דרך קשר, אמון ובחירה.
        </p>
      </div>

      <nav aria-label="ניווט משני">
        <h2 className="mb-3 font-display text-base font-semibold">ניווט</h2>
        <ul className="space-y-2 text-sm text-primary-foreground/75">
          <li><Link to="/about" className="hover:text-highlight">מי אנחנו</Link></li>
          <li><Link to="/learning" className="hover:text-highlight">לומדים אחרת</Link></li>
          <li><Link to="/spaces" className="hover:text-highlight">מרחבים טיפוליים</Link></li>
          <li><Link to="/matriculation" className="hover:text-highlight">בגרות גמישה</Link></li>
          <li><Link to="/info" className="hover:text-highlight">מידע וטפסים</Link></li>
        </ul>
      </nav>

      <nav aria-label="קהילה">
        <h2 className="mb-3 font-display text-base font-semibold">קהילה</h2>
        <ul className="space-y-2 text-sm text-primary-foreground/75">
          <li><Link to="/whats-happening" className="hover:text-highlight">מה קורה פה?</Link></li>
          <li><Link to="/graduates" className="hover:text-highlight">בוגרים</Link></li>
          <li><Link to="/faq" className="hover:text-highlight">שאלות ותשובות</Link></li>
          <li><Link to="/team" className="hover:text-highlight">הצוות שלנו</Link></li>
          <li><Link to="/donations" className="hover:text-highlight">תרומות</Link></li>
        </ul>
      </nav>

      <div>
        <h2 className="mb-3 font-display text-base font-semibold">צרו קשר</h2>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-highlight" aria-hidden />
            <a
              href="https://waze.com/ul?q=%D7%96%D7%9C%D7%9E%D7%9F%20%D7%90%D7%A8%D7%9F%207%2C%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight"
            >
              זלמן ארן 7, ירושלים
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-highlight" aria-hidden />
            <a href="tel:026244702" className="hover:text-highlight" dir="ltr">02-6244702</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-highlight" aria-hidden />
            <a href="mailto:meledschool@gmail.com" className="hover:text-highlight">
              meledschool@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/15">
      <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} תיכון מל״ד · מרכז למידה דתי, ירושלים</p>
        <Link to="/accessibility" className="underline hover:text-highlight">
          הצהרת נגישות
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
