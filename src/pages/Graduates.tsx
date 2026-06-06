import PageHero from "@/components/site/PageHero";
import { ContentPlaceholder } from "@/components/site/Placeholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Quote } from "lucide-react";

const Graduates = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("תודה! נחזור אליכם בקרוב.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <PageHero
        eyebrow="בוגרים"
        title="המשפחה שיוצאת איתך מהבית"
        description="גם אחרי הסיום, מל״ד נשאר בית. אנחנו מזמינים בוגרים להישאר בקשר, להתנדב, לחזור לבקר ולהיות חלק מהדרך של הדור הבא."
      />

      <section className="container-narrow py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">סיפורי בוגרים</h2>
          <p className="mt-3 text-muted-foreground">סיפורים מלאים של בוגרים יפורסמו כאן בהמשך - מילים שלהם, בלי פילטר.</p>
          <div className="mt-6 space-y-4">
            {[1, 2].map((i) => (
              <Card key={i} className="border-border/60 shadow-soft">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-highlight" />
                  <p className="mt-3 leading-relaxed text-foreground/80">
                    ״ציטוט של בוגר/ת יתווסף בהמשך - סיפור אישי על השנים במל״ד ומה קרה אחר כך.״
                  </p>
                  <p className="mt-4 font-display text-sm font-bold text-primary">בוגר/ת מל״ד</p>
                </CardContent>
              </Card>
            ))}
            <ContentPlaceholder>אנחנו אוספים סיפורי בוגרים. אם אתם בוגרים ורוצים לשתף - מלאו את הטופס.</ContentPlaceholder>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8 h-fit">
          <h2 className="font-display text-2xl font-bold text-primary">השארו בקשר</h2>
          <p className="mt-2 text-sm text-muted-foreground">בוגרים - מלאו פרטים ונחזור אליכם.</p>
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="g-name">שם מלא</Label>
              <Input id="g-name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="g-year">שנת סיום</Label>
              <Input id="g-year" placeholder="לדוגמה: תשפ״ב" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="g-msg">מה תרצו לספר?</Label>
              <Textarea id="g-msg" rows={5} className="mt-1.5" />
            </div>
            <Button type="submit" className="w-full bg-gradient-cta text-primary-foreground">שליחה</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Graduates;
