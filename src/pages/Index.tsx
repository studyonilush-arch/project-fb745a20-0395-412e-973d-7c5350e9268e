import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Music, Palette, ChefHat, Sprout, Users, Sparkles, BookOpen, Calendar, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import heroImage from "@/assets/hero.jpg";
import { ImagePlaceholder } from "@/components/site/Placeholder";
import SectionTitle from "@/components/site/SectionTitle";
import VideoSection from "@/components/site/VideoSection";

const spaces = [
  { icon: Music, title: "חדר מוזיקה", desc: "מקום לחיפוש, הקשבה וביטוי דרך נגינה, שירה ויצירה." },
  { icon: Palette, title: "חדר אמנות", desc: "מרחב שקט ותומך להתנסות בחומרים ולגילוי כוחות חדשים." },
  { icon: ChefHat, title: "המטבח של הלב", desc: "עשייה משותפת, אחריות וטעם של בית." },
  { icon: Sprout, title: "הגינה ההידרופונית", desc: "צמיחה, סבלנות ואחריות דרך חיבור לטבע." },
];

const learning = [
  { icon: BookOpen, title: "למידה מותאמת אישית", desc: "מערכת אישית שנבנית סביב התלמיד, הקצב והכוחות שלו." },
  { icon: Sparkles, title: "הוראה מתקנת ולקויות למידה", desc: "ליווי פדגוגי מקצועי שמחזיר את תחושת היכולת ללמוד." },
  { icon: Users, title: "מגמת ניהול עסקי", desc: "5-9 יחידות, התמחות במשאבי אנוש ותעודה טכנולוגית." },
  { icon: Heart, title: "חמ״ד מאפשר", desc: "זהות דתית מתוך בחירה והקשבה - בלי כפייה." },
];

const updates = [
  { tag: "פרויקט חודשי", title: "שבוע יצירה במרחבים", date: "החודש", desc: "תלמידים מציגים עבודות מהמטבח, האמנות והגינה במפגש פתוח להורים." },
  { tag: "טיול שנתי", title: "מסע צפון - הר ועמק", date: "בקרוב", desc: "מסע חוויתי משותף לכל השכבות עם מעגלי שיח ופעילות לילית." },
  { tag: "אירוע", title: "ערב פתוח להורים", date: "פעם בחודש", desc: "מפגש לא פורמלי עם הצוות, המנהל והיועצת - שיחה ולא הרצאה." },
];

const testimonials = [
  { name: "ש׳, בוגרת", role: "בוגרת תשפ״ב", quote: "במל״ד פגשתי לראשונה מורים שראו אותי. לא ויתרו עלי, וגם לא ויתרו לי. היום אני יודעת איפה אני עומדת." },
  { name: "הורה", role: "אמא לתלמיד י״א", quote: "אחרי שנים של מאבק, הילד שלי קם בבוקר ורוצה ללכת לבית הספר. זה לא מובן מאליו ואני אסירת תודה." },
  { name: "נ׳, תלמיד י״ב", role: "תלמיד נוכחי", quote: "ידעתי שאני יכול ללמוד, פשוט לא במסגרת שהייתי בה. כאן בנו לי מערכת שמתאימה לי ולמדתי שאני באמת מסוגל." },
];

const faqs = [
  { q: "למי מל״ד מתאים?", a: "לנערים ונערות בכיתות י-יב שמסגרות קודמות לא התאימו להם או לא הצליחו לראות אותם באמת, ושמחפשים מקום עם קשר אישי, גמישות והכוונה לבגרות ולהמשך." },
  { q: "האם לומדים לבגרות?", a: "כן. מל״ד מציע מסלולים גמישים: 12 שנות לימוד, בגרות מלאה ובגרות מורחבת עם מגמת ניהול עסקי, בקצב ובהיקף שנבנה אישית לכל תלמיד." },
  { q: "האם בית הספר דתי?", a: "כן, מל״ד שייך לחינוך הממלכתי-דתי (חמ״ד מאפשר). אנחנו מציעים זהות דתית מתוך בחירה, הקשבה ושיח אמיתי - ללא כפייה דתית." },
  { q: "איך מתחילים תהליך קבלה?", a: "ממלאים את טופס יצירת הקשר באתר, ואנחנו חוזרים לתאם שיחה מקדימה עם המשפחה. משם בונים יחד את הצעדים הבאים." },
];

const Index = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("הפנייה התקבלה. ניצור איתכם קשר בקרוב.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-wide grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="eyebrow mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-highlight" />
              מרכז למידה דתי · ירושלים
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-primary md:text-5xl lg:text-6xl">
              תיכון מל״ד — <br />
              <span className="text-secondary">בית ספר שהוא בית</span>
            </h1>
            <p className="mt-5 font-display text-xl text-foreground/80 md:text-2xl">
              אצלנו הכדור בידיים שלך.
            </p>
            <p className="lead mt-5 max-w-xl">
              מרכז למידה דתי בירושלים שמציע לנערים ונערות התחלה חדשה, מתוך
              קשר אישי, בחירה, אמון ולמידה שמותאמת באמת.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground shadow-card hover:opacity-95">
                <Link to="/contact">לטופס הרשמה <ArrowLeft className="mr-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary-soft">
                <Link to="/about">אודות מל״ד</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-secondary/15 blur-2xl" aria-hidden />
              <img
                src={heroImage}
                alt="פינת לימוד שקטה במל״ד - שולחן עץ, מחברת פתוחה וצמח באור ירושלמי"
                width={1024}
                height={1024}
                className="relative w-full rounded-[2rem] object-cover shadow-card"
              />
              <div className="absolute -bottom-4 right-4 hidden rounded-2xl bg-card px-4 py-3 shadow-warm md:block">
                <p className="font-display text-sm font-semibold text-primary">אקלים בית ספרי</p>
                <p className="text-xs text-muted-foreground">ציונים גבוהים בסקרי משרד החינוך</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-narrow py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-3">אודות</p>
            <h2 className="section-title">מל״ד זה הבית</h2>
          </div>
          <div className="lg:col-span-3">
            <p className="lead">
              מל״ד הוא מקום שמקבל נערים ונערות שיצאו ממסגרות אחרות ומזמין אותם להתחיל
              מחדש. כאן מאמינים בכל תלמיד ותלמידה וביכולת שלהם לצמוח כשהם פוגשים יחס
              אישי, הקשבה אמיתית ואפשרות לבחור איך לסיים את שנות התיכון שלהם. הלמידה
              מותאמת לכל אחד לפי הכוחות והצרכים שלו, ומשלבת תמיכה רגשית, לימודית,
              חברתית וערכית. בזכות קשר, אמון ואכפתיות, תלמידים מתחילים להחזיר לעצמם
              את תחושת הערך, המסוגלות והאמונה בעצמם.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/about">אודותינו</Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary-soft">
                <Link to="/contact">רוצים להיות חלק?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <VideoSection />


      {/* WHAT'S HAPPENING */}
      <section className="bg-muted/60 py-20 md:py-24">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="מה קורה פה?" title="החיים בבית הספר, באמת" description="אירועים, פרויקטים, מסעות וחיי יום־יום - לא קמפיין שיווקי, אלא הקצב האמיתי של הבית." />
            <Button asChild variant="ghost" className="text-primary hover:bg-primary-soft">
              <Link to="/whats-happening">לכל העדכונים <ArrowLeft className="mr-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {updates.map((u) => (
              <Card key={u.title} className="border-border/60 bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-secondary">{u.tag}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{u.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-primary">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-wide py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="גלריה" title="רגעים מהשטח" description="הצצה לרגעים יומיומיים, מסעות ויצירות של תלמידי מל״ד." />
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-soft">
            <Link to="/whats-happening">צפו בגלריה המלאה</Link>
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <ImagePlaceholder ratio="portrait" label="תמונה מהמטבח" />
          <ImagePlaceholder ratio="square" label="תמונה מהגינה" />
          <ImagePlaceholder ratio="square" label="חדר מוזיקה" />
          <ImagePlaceholder ratio="portrait" label="מסע שנתי" />
        </div>
      </section>

      {/* YEAR-ROUND LIFE */}
      <section className="bg-gradient-warm py-20 md:py-24">
        <div className="container-wide">
          <SectionTitle
            eyebrow="הווי מל״ד"
            title={"הווי מל״ד לאורך השנה"}
            description={"במל״ד השנה מלאה ברגעים של למידה, שיח, יצירה, התנדבות, טיולים וחוויות משותפות. אלו הרגעים שבונים שייכות, אמון ותחושת מסוגלות."}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { caption: "רגעים של ריכוז — למידה", ratio: "portrait" as const },
              { caption: "פורום סופשבוע — שיח קבוצתי", ratio: "square" as const },
              { caption: "חדר אמנות — יצירה", ratio: "square" as const },
              { caption: "חדר מוזיקה — ביטוי", ratio: "portrait" as const },
              { caption: "אורזים מזון למשפחות לקראת החגים", ratio: "square" as const },
              { caption: "ט״ו בשבט — חגים ומסורת", ratio: "portrait" as const },
              { caption: "סיור בעיר העתיקה — ירושלים", ratio: "portrait" as const },
              { caption: "מסע ישראלי — צילום קבוצתי", ratio: "square" as const },
              { caption: "עושים ספורט — פעילות לא פורמלית", ratio: "square" as const },
              { caption: "מבשלים יחד — ארוחה משותפת", ratio: "portrait" as const },
              { caption: "כותבים עבודות בפרגולה", ratio: "portrait" as const },
              { caption: "יום כיף סופשנה — קייקים", ratio: "square" as const },
            ].map((item) => (
              <figure key={item.caption} className="space-y-2">
                <ImagePlaceholder ratio={item.ratio} label={item.caption} />
                <figcaption className="px-1 text-xs leading-relaxed text-foreground/75">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            התמונות יוחלפו בתמונות אמיתיות מתוך אוסף ״תמונות וסרטונים אתר מל״ד״.
          </p>
        </div>
      </section>

      {/* SPACES */}
      <section className="bg-gradient-warm py-20 md:py-28">
        <div className="container-wide">
          <SectionTitle
            eyebrow="מרחבים טיפוליים"
            title="מרחבים שדרכם צומחים"
            description="כאן קורים הדברים הגדולים: תלמידים מוצאים שקט, ביטוי עצמי וחיבור פנימי בדרך לא שיפוטית. כל מרחב פותח דלת לעולם אישי, מזמן חוויה של הצלחה, חיבור רגשי ובניית אמון - בעצמם ובאחרים."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map((s) => (
              <Card key={s.title} className="group border-border/60 bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-warm">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-soft text-secondary transition-smooth group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/spaces">כל המרחבים</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="container-narrow py-20 md:py-28">
        <SectionTitle
          eyebrow="לומדים אחרת"
          title="אנחנו לומדים אחרת — מתוך קשר, אמון והזדמנות"
          description="לא רק 'מאפשרים'. אנחנו בונים יחד עם כל תלמיד תוכנית אישית שמחזירה את היכולת ללמוד."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {learning.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <l.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{l.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-gradient-cta text-primary-foreground">
            <Link to="/learning">קראו עוד על למידה והכוונה עתידית</Link>
          </Button>
        </div>
      </section>

      {/* STAFF */}
      <section className="bg-muted/60 py-20 md:py-24">
        <div className="container-wide">
          <SectionTitle
            eyebrow="הצוות שלנו"
            title="אנשים שמלווים, רואים ומחזיקים"
            description="צוות מל״ד הוא לא רק רשימת תפקידים - אלה האנשים שמכירים כל תלמיד בשמו, מקשיבים, מאמינים ויודעים מתי להחזיק חזק ומתי להניח בעדינות."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["מנהל בית הספר", "יועצת חינוכית", "עובדת סוציאלית", "רכזת פדגוגית"].map((role) => (
              <div key={role} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full">
                  <ImagePlaceholder ratio="square" label="תמונה" className="!aspect-square" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-primary">{role}</h3>
                <p className="mt-1 text-xs text-muted-foreground">שם ופרטים יתעדכנו</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-soft">
              <Link to="/team">הכירו את הצוות שלנו</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-wide py-20 md:py-24">
        <SectionTitle eyebrow="סיפורים" title="קולות מתוך הבית" description="בוגרים, תלמידים והורים מספרים בכנות." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/60 bg-card shadow-soft">
              <CardContent className="p-6">
                <Quote className="h-7 w-7 text-highlight" />
                <p className="mt-4 leading-relaxed text-foreground/85">״{t.quote}״</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="ghost" className="text-primary hover:bg-primary-soft">
            <Link to="/graduates">סיפורי הצלחה <ArrowLeft className="mr-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-warm py-20 md:py-24">
        <div className="container-narrow">
          <SectionTitle eyebrow="שאלות נפוצות" title="שאלות שאנחנו שומעים הרבה" />
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-right font-display text-base font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-soft">
              <Link to="/faq">לכל השאלות והתשובות</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-narrow py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="צרו קשר" title="שולחים פנייה — אנחנו חוזרים אליכם" description="תלמידים, הורים ואנשי מקצוע מוזמנים לפנות. כל פנייה נקראת על ידי אדם, ולא נשארת בלי מענה." />
            <div className="mt-6 rounded-2xl bg-secondary-soft p-5 text-sm text-secondary">
              <Heart className="mb-2 h-5 w-5" />
              הפנייה נשמרת בפרטיות מלאה.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">שם מלא</Label>
                <Input id="name" name="name" required className="mt-1.5" placeholder="שמכם" />
              </div>
              <div>
                <Label htmlFor="phone">טלפון</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-1.5" placeholder="050-0000000" />
              </div>
            </div>

            <div className="mt-5">
              <Label>סוג הפונה</Label>
              <RadioGroup defaultValue="parent" name="role" className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  { v: "student", l: "תלמיד" },
                  { v: "parent", l: "הורה" },
                  { v: "pro", l: "איש מקצוע" },
                  { v: "alum", l: "בוגר" },
                  { v: "other", l: "אחר" },
                ].map((o) => (
                  <Label key={o.v} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-normal has-[:checked]:border-primary has-[:checked]:bg-primary-soft">
                    <RadioGroupItem value={o.v} /> {o.l}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="mt-5">
              <Label htmlFor="message">איך נוכל לעזור?</Label>
              <Textarea id="message" name="message" rows={5} className="mt-1.5" placeholder="כתבו לנו בחופשיות..." />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-cta text-primary-foreground">
              שליחת פנייה
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
