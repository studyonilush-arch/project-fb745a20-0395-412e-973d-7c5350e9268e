import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Briefcase, Check } from "lucide-react";

const tracks = [
  {
    icon: BookOpen,
    title: "12 שנות לימוד",
    desc: "מסלול שמאפשר לתלמיד לסיים את שנות התיכון עם תעודת סיום, גם כשבגרות מלאה לא מתאימה בשלב הזה.",
    points: ["סיום משמעותי של התיכון", "ליווי אישי וחברתי מלא", "הכוונה להמשך מקצועי ולשירות"],
  },
  {
    icon: GraduationCap,
    title: "בגרות מלאה",
    desc: "מסלול בגרות מלא, בקצב והיקף שנבנים אישית לכל תלמיד, עם ליווי פדגוגי צמוד והתאמות לפי הצורך.",
    points: ["מקצועות חובה מלאים", "התאמות בבגרות לפי אבחון", "התקדמות לפי הקצב האישי"],
  },
  {
    icon: Briefcase,
    title: "בגרות מורחבת · מגמת ניהול עסקי",
    desc: "מגמה ייחודית של 5-9 יחידות עם התמחות במשאבי אנוש ותעודה טכנולוגית בסיום - שילוב של בגרות וכלים לעולם העבודה.",
    points: ["5-9 יחידות בניהול עסקי", "התמחות במשאבי אנוש", "תעודה טכנולוגית מוכרת"],
  },
];

const Matriculation = () => (
  <div>
    <PageHero
      eyebrow="בגרות גמישה"
      title="שלושה מסלולים, התקדמות אמיתית"
      description="בגרות בקצב שלך, עם ליווי צמוד ועם הכרה במציאות שממנה הגעת. אנחנו לא מוותרים, ולא לוחצים על דברים שלא מתאימים."
    />

    <section className="container-narrow py-16 space-y-6">
      {tracks.map((t) => (
        <Card key={t.title} className="border-border/60 shadow-soft">
          <CardContent className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
            <div className="md:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-warm">
                <t.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-primary">{t.title}</h2>
            </div>
            <div className="md:col-span-2">
              <p className="leading-relaxed text-foreground/80">{t.desc}</p>
              <ul className="mt-5 space-y-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="rounded-3xl bg-gradient-warm p-8 text-center md:p-10">
        <p className="font-display text-xl font-bold text-primary md:text-2xl">
          ההתקדמות נמדדת לא רק בציון - אלא בתחושת המסוגלות שמתחילה לחזור.
        </p>
      </div>
    </section>
  </div>
);

export default Matriculation;
