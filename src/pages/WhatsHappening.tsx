import PageHero from "@/components/site/PageHero";
import { ImagePlaceholder } from "@/components/site/Placeholder";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const posts = [
  { tag: "פרויקט", title: "שבוע יצירה במרחבים", date: "השבוע", text: "תלמידים מציגים יצירות מהאמנות, המטבח והגינה. כל הקהילה מוזמנת לעבור." },
  { tag: "מסע", title: "טיול שנתי - צפון", date: "החודש הבא", text: "שלושה ימים של הליכה, חברה ומעגלי שיח. מסע שכל שכבה מחכה לו." },
  { tag: "אירוע", title: "ערב משפחות חודשי", date: "פעם בחודש", text: "מפגש פתוח עם הצוות - שיחה ולא הרצאה, קפה ולא מצגות." },
  { tag: "הצלחה", title: "פרויקט גמר במגמת ניהול עסקי", date: "סוף סמסטר", text: "תלמידי י״ב מציגים תוכניות עסקיות שבנו לאורך השנה." },
  { tag: "התנדבות", title: "פעילות קהילתית בשכונה", date: "השבוע", text: "תלמידים מתנדבים בפרויקט מקומי בלב ירושלים." },
  { tag: "סדנה", title: "סדנת בישול פתוחה", date: "כל יום שלישי", text: "המטבח של הלב פתוח לכל תלמיד שמרגיש שזה היום שלו לבשל." },
];

const WhatsHappening = () => (
  <div>
    <PageHero
      eyebrow="מה קורה פה?"
      title="היומן של מל״ד"
      description="עדכונים, פרויקטים, מסעות ואירועים. הקצב האמיתי של בית הספר - כפי שהוא, בלי פילטרים."
    />

    <section className="container-wide py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Card key={i} className="overflow-hidden border-border/60 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
            <ImagePlaceholder ratio="video" label="תמונה תתווסף" className="!rounded-none border-x-0 border-t-0" />
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-secondary">{p.tag}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default WhatsHappening;
