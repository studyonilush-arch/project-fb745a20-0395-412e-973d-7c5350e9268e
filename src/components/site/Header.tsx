import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/site/Logo";

const navItems = [
  { to: "/", label: "עמוד הבית" },
  { to: "/about", label: "מי אנחנו" },
  { to: "/learning", label: "לומדים אחרת" },
  { to: "/spaces", label: "מרחבים טיפוליים" },
  { to: "/matriculation", label: "בגרות גמישה" },
  { to: "/social", label: "חינוך חברתי" },
  { to: "/whats-happening", label: "מה קורה פה?" },
  { to: "/graduates", label: "בוגרים" },
  { to: "/info", label: "מידע וטפסים" },
  { to: "/contact", label: "צרו קשר" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-smooth hover:text-primary hover:bg-primary-soft ${
                  isActive ? "text-primary bg-primary-soft" : "text-foreground/75"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex border-clay/40 text-foreground hover:bg-peach/40">
            <Link to="/donations"><Heart className="ml-1 h-4 w-4 text-highlight" fill="currentColor" /> תרומות</Link>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex bg-primary text-primary-foreground shadow-soft hover:bg-primary/90">
            <Link to="/contact">לטופס הרשמה</Link>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="תפריט"
            className="xl:hidden rounded-md p-2 text-foreground hover:bg-muted"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-wide flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? "text-primary bg-primary-soft" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/donations" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80">
              תרומות
            </NavLink>
            <Button asChild className="mt-2 bg-gradient-cta text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>לטופס הרשמה</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
