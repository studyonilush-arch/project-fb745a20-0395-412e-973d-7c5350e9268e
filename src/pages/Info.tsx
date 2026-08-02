import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { ContentPlaceholder } from "@/components/site/Placeholder";
import { FileText, Sparkles, BookOpenCheck, ScrollText, Phone, HelpCircle, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const REGISTRATION_VIEW_URL =
  "https://docs.google.com/document/d/1PNzI3MGVgBdvd_nW74xJYKPEupeU4oIC29RlJc70j2g/preview";
const REGISTRATION_PDF_URL =
  "https://docs.google.com/document/d/1PNzI3MGVgBdvd_nW74xJYKPEupeU4oIC29RlJc70j2g/export?format=pdf";

const items = [
  { icon: BookOpenCheck, title: "מידע להורים", desc: "חוברת מידע, נהלים ותקנון בית הספר.", placeholder: true },
  { icon: HelpCircle, title: "שאלות ותשובות", desc: "שאלות שאנחנו שומעים הרבה ממשפחות חדשות.", link: "/faq" },
  { icon: Sparkles, title: "יום במל״ד", desc: "איך נראה יום שנבנה יחד עם התלמיד, לא נגזר עליו מראש.", placeholder: true },
  { icon: ScrollText, title: "תקנון בית הספר", desc: "כללי התנהגות, נוכחות ולמידה.", placeholder: true },
  { icon: Phone, title: "פרטי קשר", desc: "טלפון, מייל וכתובת בית הספר.", link: "/contact" },
];

const Info = () => (
  <div>
    <PageHero
      eyebrow="מידע וטפסים"
      title="כל מה שצריך לדעת"
      description="המקום שבו תמצאו טפסים, נהלים ומידע שימושי להורים ולתלמידים. כל מה שקשור למל״ד נבנה כדי לפנות דרך, לא כדי לחסום."
    />

    <section className="container-wide py-16">
      <Card className="mb-10 border-primary/25 bg-primary-soft/40 shadow-soft">
        <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary">טופס רישום למל״ד</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                את הטופס ניתן לצפות, להוריד ולהדפיס. מילוי הטופס נעשה בכתב יד ומוגש ישירות לבית הספר.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-3">
            <a
              href={REGISTRATION_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              <Eye className="h-4 w-4" /> צפייה
            </a>
            <a
              href={REGISTRATION_PDF_URL}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Download className="h-4 w-4" /> הורדה
            </a>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  </div>
);

export default Info;
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
