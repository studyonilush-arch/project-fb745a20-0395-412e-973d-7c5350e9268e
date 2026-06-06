import PageHero from "@/components/site/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder, ContentPlaceholder } from "@/components/site/Placeholder";
import { Music, Palette, ChefHat, Sprout } from "lucide-react";

const spaces = [
  {
    id: "music",
    icon: Music,
    title: "חדר מוזיקה",
    short: "חיפוש, הקשבה וביטוי דרך צליל.",
    text: "חדר המוזיקה במל״ד הוא מקום לחיפוש, הקשבה וביטוי. דרך נגינה, שירה, יצירה ומדיטציה, תלמידים מוזמנים לשאול מי הם באמת, מה הם מרגישים, ומה המוזיקה שלהם רוצה לומר. זהו מרחב שבו אפשר להניח בצד שיפוטיות, לגלות קול פנימי, ולמלא את המוזיקה באהבה, חופש, קדושה ורגישות.",
    placeholder: "ציטוט מוביל המרחב יתווסף בהמשך.",
  },
  {
    id: "art",
    icon: Palette,
    title: "חדר אמנות",
    short: "ביטוי עצמי דרך יצירה.",
    text: "חדר האמנות הוא מרחב שקט ותומך לביטוי עצמי דרך יצירה. בהובלת מאשה גולדמן, מטפלת באמנות מוסמכת ומורה לאמנות, התלמידים מתנסים בחומרים, טכניקות ותהליכי יצירה שמאפשרים להם להירגע, להתבטא, להעז ולגלות כוחות חדשים.",
    placeholder: "תמונות נוספות מחדר האמנות יתווספו בהמשך.",
  },
  {
    id: "kitchen",
    icon: ChefHat,
    title: "המטבח של הלב",
    short: "עשייה, שותפות וטעם של בית.",
    text: "המטבח של הלב הוא מרחב של עשייה, שותפות וטעם של בית. דרך בישול, אפייה ועבודה משותפת, תלמידים חווים הצלחה מוחשית, לומדים אחריות, נתינה, שיתוף פעולה ויכולת ליצור משהו טוב עבור עצמם ועבור אחרים.",
    placeholder: "טקסט מלא ותמונות יתווספו בהמשך.",
  },
  {
    id: "garden",
    icon: Sprout,
    title: "הגינה ההידרופונית",
    short: "צמיחה, סבלנות ואחריות.",
    text: "הגינה ההידרופונית מזמינה את התלמידים לפגוש תהליכים של צמיחה, סבלנות ואחריות. העבודה עם הצמחים מאפשרת חיבור לאדמה, לטבע ולתהליך הדרגתי שבו השקעה, התמדה וטיפול עדין מביאים תוצאות שנראות לעין.",
    placeholder: "טקסט מלא ותמונות יתווספו בהמשך.",
  },
];

const Spaces = () => (
  <div>
    <PageHero
      eyebrow="מרחבים טיפוליים"
      title="מרחבים שדרכם צומחים"
      description="ארבעה מרחבים, ארבע דרכים לפגוש את עצמך. במרחבים האלה נבנים אמון, ביטוי והצלחה - בקצב שמתאים לכל תלמיד."
    />

    <section className="container-wide py-16">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {spaces.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="group">
            <Card className="h-full border-border/60 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-soft text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-20 space-y-20">
        {spaces.map((s, i) => (
          <article key={s.id} id={s.id} className="grid scroll-mt-24 gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <ImagePlaceholder ratio="wide" label={`תמונה: ${s.title}`} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="eyebrow">מרחב טיפולי</p>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-foreground/80">{s.text}</p>
              <ContentPlaceholder>{s.placeholder}</ContentPlaceholder>
            </div>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Spaces;
