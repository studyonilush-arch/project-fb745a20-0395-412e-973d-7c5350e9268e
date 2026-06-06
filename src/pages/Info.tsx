import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { ContentPlaceholder } from "@/components/site/Placeholder";
import { FileText, Clock, BookOpenCheck, ScrollText, Phone, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { icon: FileText, title: "טפסי רישום", desc: "טופס רישום לתלמיד חדש - יועלה בהמשך.", placeholder: true },
  { icon: BookOpenCheck, title: "מידע להורים", desc: "חוברת מידע, נהלים ותקנון בית הספר.", placeholder: true },
  { icon: HelpCircle, title: "שאלות ותשובות", desc: "שאלות שאנחנו שומעים הרבה ממשפחות חדשות.", link: "/faq" },
  { icon: Clock, title: "לוח צלצולים", desc: "מערכת הזמנים השבועית של בית הספר.", placeholder: true },
  { icon: ScrollText, title: "תקנון בית הספר", desc: "כללי התנהגות, נוכחות ולמידה.", placeholder: true },
  { icon: Phone, title: "פרטי קשר", desc: "טלפון, מייל וכתובת בית הספר.", link: "/contact" },
];

const Info = () => (
  <div>
    <PageHero
      eyebrow="מידע וטפסים"
      title="כל מה שצריך לדעת"
      description="המקום שבו תמצאו טפסים, נהלים, לוח צלצולים ומידע שימושי להורים ולתלמידים."
    />

    <section className="container-wide py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="border-border/60 shadow-soft">
          <CardContent className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            {it.link ? (
              <Link to={it.link} className="mt-4 inline-block text-sm font-semibold text-secondary hover:underline">לצפייה ←</Link>
            ) : (
              <div className="mt-4"><ContentPlaceholder>תוכן יועלה בקרוב.</ContentPlaceholder></div>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  </div>
);

export default Info;
