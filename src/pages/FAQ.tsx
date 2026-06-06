import PageHero from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContentPlaceholder } from "@/components/site/Placeholder";

const faqs = [
  { q: "למי מל״ד מתאים?", a: "לנערים ונערות בכיתות י-יב שמסגרות קודמות לא התאימו להם או לא הצליחו לראות אותם באמת, ושמחפשים מקום עם קשר אישי, גמישות והכוונה לבגרות ולהמשך." },
  { q: "האם לומדים לבגרות?", a: "כן. מל״ד מציע מסלולים גמישים: 12 שנות לימוד, בגרות מלאה ובגרות מורחבת עם מגמת ניהול עסקי, בקצב ובהיקף שנבנה אישית לכל תלמיד." },
  { q: "האם בית הספר דתי?", a: "כן, מל״ד שייך לחינוך הממלכתי-דתי (חמ״ד מאפשר). אנחנו מציעים זהות דתית מתוך בחירה, הקשבה ושיח אמיתי - ללא כפייה דתית." },
  { q: "איך מתחילים תהליך קבלה?", a: "ממלאים את טופס יצירת הקשר באתר, ואנחנו חוזרים לתאם שיחה מקדימה עם המשפחה. משם בונים יחד את הצעדים הבאים." },
  { q: "האם יש ליווי רגשי וטיפולי?", a: "כן. יועצת חינוכית, עובדת סוציאלית ומובילי מרחבים טיפוליים עובדים יחד עם הצוות הפדגוגי כחלק בלתי נפרד מהיום־יום." },
  { q: "כמה תלמידים יש בכיתה?", a: "אנחנו עובדים בקבוצות קטנות כדי לאפשר מענה אישי. הגודל המדויק משתנה לפי שכבה ומקצוע." },
  { q: "האם מקבלים תלמידים עם לקויות למידה?", a: "כן. צוות הוראה מתקנת מקצועי בונה תוכנית אישית, מלווה את התלמיד ומסייע גם בהתאמות לבגרות." },
  { q: "מה מיוחד בתוכניות שלכם?", a: "" },
];

const FAQ = () => (
  <div>
    <PageHero eyebrow="שאלות ותשובות" title="שאלות שמשפחות שואלות" description="ריכזנו את השאלות הנפוצות. לא מצאתם תשובה? כתבו לנו." />
    <section className="container-narrow py-16">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
            <AccordionTrigger className="text-right font-display text-base font-semibold text-primary hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a || <ContentPlaceholder>תשובה לתוכניות הייחודיות תתווסף בהמשך.</ContentPlaceholder>}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </div>
);

export default FAQ;
