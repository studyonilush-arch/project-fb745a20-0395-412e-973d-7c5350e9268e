import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Sparkles, Heart, Target, Compass } from "lucide-react";

const pillars = [
  { icon: Target, title: "מערכת אישית", desc: "כל תלמיד בונה עם הצוות מערכת שמתאימה לקצב, ליכולות ולמטרות שלו." },
  { icon: Users, title: "קבוצות קטנות", desc: "לימוד בקבוצות מצומצמות שמאפשרות מענה אישי ושיח של ממש." },
  { icon: BookOpen, title: "למידה פרטנית", desc: "שיעורי 1:1 לתלמידים שזקוקים לליווי צמוד יותר במקצועות מסוימים." },
  { icon: Sparkles, title: "הוראה מתקנת ולקויות למידה", desc: "צוות מקצועי שמחזיר את תחושת היכולת ללמוד, ובונה אסטרטגיות אישיות." },
  { icon: Heart, title: "תמיכה רגשית", desc: "ליווי רגשי כחלק בלתי נפרד מהלמידה - לא כתוספת חיצונית." },
  { icon: Compass, title: "מטרות שהתלמיד מוביל", desc: "התלמיד הוא בעלים על המטרות שלו, בליווי הצוות. כך נבנית אחריות אמיתית." },
];

const Learning = () => (
  <div>
    <PageHero
      eyebrow="לומדים אחרת"
      title="לא מאפשרים — בונים יחד"
      description="מל״ד לא ״מאפשר״ למידה. הוא בונה לכל תלמיד תוכנית אישית שמחזירה לו את היכולת ללמוד, גם אחרי שנים של תסכול."
    />

    <section className="container-narrow py-16">
      <div className="rounded-3xl bg-gradient-warm p-8 md:p-12">
        <p className="font-display text-2xl font-bold leading-snug text-primary md:text-3xl">
          ״הבחירה אינה ויתור על גבולות. הבחירה היא דרך לבנות אחריות.״
        </p>
        <p className="mt-3 text-sm text-secondary">— עקרון מנחה בעבודה החינוכית במל״ד</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title} className="border-border/60 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft">
        <h2 className="font-display text-2xl font-bold text-primary">התאמות לבגרות</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          תלמידי מל״ד זכאים להתאמות בבגרות בהתאם לאבחון ולצורך - הארכת זמן, הקראה, היבחנות בנפרד ועוד.
          הצוות הפדגוגי מלווה את כל התהליך מול משרד החינוך, וההורים והתלמיד מעורבים בכל שלב.
        </p>
      </div>
    </section>
  </div>
);

export default Learning;
