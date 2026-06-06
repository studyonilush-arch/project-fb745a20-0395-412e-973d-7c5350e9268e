import PageHero from "@/components/site/PageHero";
import { ImagePlaceholder, ContentPlaceholder } from "@/components/site/Placeholder";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Sparkles, Users, MessageCircle, TrendingUp, Home } from "lucide-react";

const sections = [
  { icon: Sparkles, title: "התחלה חדשה", text: "מל״ד פותח דלת לנערים ונערות שלא מצאו את עצמם במסגרות הקודמות, ומזמין אותם להתחיל מחדש - בלי תיוגים ובלי שיפוט. כל תלמיד מתחיל אצלנו מנקודה ראשונית של אמון." },
  { icon: Heart, title: "אמונה בתלמיד", text: "כל תלמיד ותלמידה אצלנו הם יחידים. אנחנו מאמינים שיש בכל אחד מהם ייחודיות חיובית ויכולת אמיתית, גם כשהם עצמם עדיין לא מאמינים בכך." },
  { icon: TrendingUp, title: "בחירה ואחריות", text: "הבחירה היא ערך מרכזי במל״ד, אבל היא לא היעדר גבולות - היא דרך לבנות אחריות. תלמידים בוחרים מסלולים, מקצועות ודרכי למידה, ולוקחים עליהם בעלות." },
  { icon: MessageCircle, title: "קשר אישי ותמיכה מתמשכת", text: "בלב מל״ד עומד הקשר. מורה, יועצת, עו״ס ומובילי מרחב מלווים כל תלמיד בתהליך אישי, גם כשקשה, גם כשמתקדמים." },
  { icon: Award, title: "הצלחות קטנות שמחזירות אמון", text: "אנחנו בונים שלב אחר שלב חוויות של הצלחה - מבחן שעובר, פרויקט שמסתיים, שיחה שמשנה תפיסה. ההצלחות האלה מצטברות לתחושת מסוגלות חדשה." },
  { icon: Users, title: "אקלים בית ספרי והכרה", text: "מל״ד זוכה לציוני אקלים בית ספרי גבוהים בסקרי משרד החינוך ובסקרי ההורים של מנח״י, וזכה בתעודת הצטיינות של משרד החינוך בתשפ״ד, רמה 1." },
  { icon: Home, title: "מרחבים של ביטוי אישי", text: "חדר מוזיקה, חדר אמנות, מטבח לימודי וגינה הידרופונית - מרחבים שדרכם תלמידים פוגשים את עצמם, מתבטאים ומגלים כוחות חדשים." },
];

const About = () => (
  <div>
    <PageHero
      eyebrow="מי אנחנו"
      title="מל״ד — הבית שבחרנו לבנות"
      description="מל״ד הוא מרכז למידה דתי בירושלים שמלווה נערים ונערות בכיתות י-יב לקראת סיום תיכון, בגרות והמשך משמעותי - מתוך קשר, בחירה ואחריות."
    />

    <section className="container-narrow grid gap-10 py-16 lg:grid-cols-3 lg:gap-16">
      <div className="lg:col-span-1">
        <ImagePlaceholder ratio="portrait" label="תמונה לעמוד אודות" />
        <ContentPlaceholder>
          <p className="font-semibold">דבר המנהל</p>
          <p className="mt-1 text-xs">טקסט קצר מהמנהל יתווסף כאן.</p>
        </ContentPlaceholder>
      </div>
      <div className="space-y-6 lg:col-span-2">
        {sections.map((s) => (
          <Card key={s.title} className="border-border/60 shadow-soft">
            <CardContent className="flex gap-5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-primary">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <ContentPlaceholder>
          הנתונים על ההכרה והתעודה דורשים אישור סופי לפני פרסום.
        </ContentPlaceholder>
      </div>
    </section>
  </div>
);

export default About;
