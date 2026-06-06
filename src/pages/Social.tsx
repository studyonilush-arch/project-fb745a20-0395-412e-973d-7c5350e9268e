import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Heart, Star, MessageCircle, Globe } from "lucide-react";

const items = [
  { icon: Mountain, title: "מסעות שנתיים", desc: "מסעות חוויתיים בארץ שמלכדים כיתה, פותחים שיח ומחזקים שייכות." },
  { icon: MessageCircle, title: "מעגלי שיח", desc: "מפגשים שבועיים שבהם תלמידים מדברים, מקשיבים ולומדים להגיד את שלהם בלי לפחד." },
  { icon: Users, title: "פעילויות אחר הצהריים", desc: "חוגים ופעילויות חברתיות שמרחיבות את הבית ומחזקות חברויות." },
  { icon: Heart, title: "קהילה ומשפחה", desc: "קשר רציף עם ההורים, בית פתוח וערבי משפחות לאורך השנה." },
  { icon: Globe, title: "מעורבות חברתית", desc: "פרויקטים של נתינה לקהילה הירושלמית ולחברה הישראלית." },
  { icon: Star, title: "זהות יהודית", desc: "שיח על זהות, ארץ ועם - מתוך הקשבה ובחירה אישית." },
];

const Social = () => (
  <div>
    <PageHero
      eyebrow="חינוך חברתי"
      title="חברה, שייכות, זהות"
      description="חינוך חברתי במל״ד הוא לא תוספת - הוא חלק מהבית. דרך מסעות, מעגלים ופעילויות, תלמידים בונים מי הם ולמה הם שייכים."
    />

    <section className="container-wide py-16">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <Card key={i.title} className="border-border/60 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/20 text-highlight">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default Social;
