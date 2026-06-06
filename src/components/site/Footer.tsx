import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
    <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 font-display text-lg font-bold">מל״ד</span>
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

      <div>
        <h3 className="mb-3 font-display text-base font-semibold">ניווט</h3>
        <ul className="space-y-2 text-sm text-primary-foreground/75">
          <li><Link to="/about" className="hover:text-highlight">מי אנחנו</Link></li>
          <li><Link to="/learning" className="hover:text-highlight">לומדים אחרת</Link></li>
          <li><Link to="/spaces" className="hover:text-highlight">מרחבים טיפוליים</Link></li>
          <li><Link to="/matriculation" className="hover:text-highlight">בגרות גמישה</Link></li>
          <li><Link to="/info" className="hover:text-highlight">מידע וטפסים</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="mb-3 font-display text-base font-semibold">קהילה</h3>
        <ul className="space-y-2 text-sm text-primary-foreground/75">
          <li><Link to="/whats-happening" className="hover:text-highlight">מה קורה פה?</Link></li>
          <li><Link to="/graduates" className="hover:text-highlight">בוגרים</Link></li>
          <li><Link to="/faq" className="hover:text-highlight">שאלות ותשובות</Link></li>
          <li><Link to="/team" className="hover:text-highlight">הצוות שלנו</Link></li>
          <li><Link to="/donations" className="hover:text-highlight">תרומות</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="mb-3 font-display text-base font-semibold">צרו קשר</h3>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-highlight" /> ירושלים</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-highlight" /> טלפון יתעדכן בקרוב</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-highlight" /> info@malad.example</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/15">
      <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} תיכון מל״ד · מרכז למידה דתי, ירושלים</p>
        <p>חינוך מתוך קשר, בחירה ואחריות</p>
      </div>
    </div>
  </footer>
);

export default Footer;
