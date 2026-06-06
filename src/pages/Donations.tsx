import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { ContentPlaceholder } from "@/components/site/Placeholder";

const Donations = () => (
  <div>
    <PageHero
      eyebrow="תרומות"
      title="להיות שותפים בבית"
      description="כל תרומה למל״ד היא השקעה ישירה בנערים ונערות שזקוקים להזדמנות חדשה. תודה שאתם איתנו."
    />
    <section className="container-narrow py-16">
      <div className="rounded-3xl bg-gradient-warm p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-cta text-primary-foreground shadow-card">
          <Heart className="h-8 w-8" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold text-primary md:text-3xl">תורמים לעתיד</h2>
        <p className="mt-3 leading-relaxed text-foreground/80">
          תרומות מאפשרות לנו להמשיך ולפתח את המרחבים הטיפוליים, ללוות תלמידים שזקוקים לתמיכה נוספת, ולשמור על
          איכות הליווי האישי שמייחד את מל״ד.
        </p>
        <div className="mt-8">
          <Button size="lg" disabled className="bg-gradient-cta text-primary-foreground opacity-80">קישור תרומות יתווסף בהמשך</Button>
        </div>
        <div className="mt-6">
          <ContentPlaceholder>קישור התרומות הסליקה יחובר כאן ברגע שיהיה מוכן.</ContentPlaceholder>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          רוצים לתרום באופן אחר או לתאם תרומה ייעודית?{" "}
          <Link to="/contact" className="font-semibold text-primary underline">כתבו לנו</Link>.
        </p>
      </div>
    </section>
  </div>
);

export default Donations;
