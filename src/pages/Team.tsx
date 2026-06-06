import PageHero from "@/components/site/PageHero";
import { ImagePlaceholder, ContentPlaceholder } from "@/components/site/Placeholder";

const roles = [
  "מנהל בית הספר",
  "יועצת חינוכית",
  "עובדת סוציאלית",
  "רכזת פדגוגית",
  "צוות הוראה מתקנת",
  "מובילת חדר אמנות",
  "מוביל חדר מוזיקה",
  "מוביל הגינה ההידרופונית",
  "מובילת המטבח של הלב",
  "מחנכי כיתות י-יב",
];

const Team = () => (
  <div>
    <PageHero
      eyebrow="הצוות שלנו"
      title="האנשים מאחורי הבית"
      description="צוות מל״ד הוא קבוצה של אנשים שבחרו להיות פה - מורים, מטפלים ומובילי מרחב שמכירים כל תלמיד בשמו ובסיפורו."
    />
    <section className="container-wide py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((role) => (
          <div key={role} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
            <ImagePlaceholder ratio="square" label="תמונת איש צוות" />
            <h3 className="mt-4 font-display text-base font-bold text-primary">{role}</h3>
            <p className="mt-1 text-xs text-muted-foreground">שם ופרטים יתעדכנו</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <ContentPlaceholder>תמונות וביוגרפיות הצוות יתעדכנו בהמשך.</ContentPlaceholder>
      </div>
    </section>
  </div>
);

export default Team;
