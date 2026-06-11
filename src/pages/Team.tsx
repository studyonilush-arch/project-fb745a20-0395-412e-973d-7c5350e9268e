import PageHero from "@/components/site/PageHero";
import { ImagePlaceholder, ContentPlaceholder } from "@/components/site/Placeholder";

const team = [
  { role: "מנהל בית הספר" },
  { role: "יועצת חינוכית" },
  { role: "עובדת סוציאלית" },
  { role: "רכזת פדגוגית" },
  { role: "צוות הוראה מתקנת" },
  { role: "מובילת חדר אמנות" },
  { role: "מוביל חדר מוזיקה" },
  { role: "מוביל הגינה ההידרופונית" },
  { role: "מובילת המטבח של הלב" },
  { role: "מחנכי כיתות י-יב" },
  { name: "נילי שרעבי", role: "מנהלת פרויקטים" },
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
        {team.map((member) => (
          <div key={member.role} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
            <ImagePlaceholder ratio="square" label="תמונת איש צוות" />
            <h3 className="mt-4 font-display text-base font-bold text-primary">{member.role}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{member.name ?? "שם ופרטים יתעדכנו"}</p>
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
