import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("הפנייה התקבלה. ניצור איתכם קשר בקרוב.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div>
      <PageHero
        eyebrow="צרו קשר"
        title="כותבים — ואנחנו חוזרים"
        description="תלמידים, הורים ואנשי מקצוע מוזמנים לפנות בכל שאלה. כל פנייה נקראת על ידי אדם, ולא נשארת בלי מענה."
      />

      <section className="container-narrow py-16 grid gap-10 lg:grid-cols-5">
        <aside className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-bold text-primary">פרטי בית הספר</h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" /> ירושלים</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> טלפון יתעדכן בקרוב</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> info@malad.example</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-secondary-soft p-6 text-secondary">
            <Heart className="h-5 w-5" />
            <p className="mt-2 text-sm leading-relaxed">הפנייה נשמרת בפרטיות מלאה. אנחנו לא משתפים פרטים עם אף גורם חיצוני.</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="c-name">שם מלא</Label>
              <Input id="c-name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="c-phone">טלפון</Label>
              <Input id="c-phone" type="tel" required className="mt-1.5" />
            </div>
          </div>
          <div className="mt-5">
            <Label>סוג הפונה</Label>
            <RadioGroup defaultValue="parent" className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
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
            <Label htmlFor="c-msg">איך נוכל לעזור?</Label>
            <Textarea id="c-msg" rows={6} className="mt-1.5" placeholder="כתבו לנו בחופשיות..." />
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-cta text-primary-foreground">
            שליחת פנייה
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
