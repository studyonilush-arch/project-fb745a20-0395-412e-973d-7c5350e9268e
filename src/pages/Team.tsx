import PageHero from "@/components/site/PageHero";
import { ImagePlaceholder } from "@/components/site/Placeholder";

type Member = {
  name: string;
  role: string;
  group: "הנהלה" | "פדגוגיה וליווי" | "מרחבים טיפוליים";
};

const team: Member[] = [
  { name: "מיכאל קרש", role: "מנהל בית הספר", group: "הנהלה" },
  { name: "רחלי הללי", role: "מנהלת אדמיניסטרטיבית", group: "הנהלה" },
  { name: "נילי שרעבי", role: "מנהלת פרויקטים, רכזת מגמה, מטבח טיפולי וגינה הידרופונית", group: "הנהלה" },
  { name: "הדס אנדרמן", role: "רכזת פדגוגית", group: "פדגוגיה וליווי" },
  { name: "אודיה ואן לואן", role: "יועצת", group: "פדגוגיה וליווי" },
  { name: "סיון חדד", role: "עובדת סוציאלית", group: "פדגוגיה וליווי" },
  { name: "בת שבע ויגודה", role: "הוראה מתקנת", group: "פדגוגיה וליווי" },
  { name: "פולינה קריץ", role: "רכזת תוכניות חוץ בית ספריות", group: "פדגוגיה וליווי" },
  { name: "אסף נווה שלום", role: "מטפל במוזיקה", group: "מרחבים טיפוליים" },
  { name: "מאשה גולדמן", role: "מטפלת באומנות", group: "מרחבים טיפוליים" },
];

const groups: Member["group"][] = ["הנהלה", "פדגוגיה וליווי", "מרחבים טיפוליים"];

const Team = () => (
  <div>
    <PageHero
      eyebrow="הצוות שלנו"
      title="האנשים מאחורי הבית"
      description="צוות מל״ד הוא קבוצה של אנשים שבחרו להיות פה. מורים, מטפלים ומובילי מרחב שמכירים כל תלמיד בשמו ובסיפורו."
    />

    <section className="container-wide py-16">
      {groups.map((group) => (
        <div key={group} className="mb-14 last:mb-0">
          <h2 className="mb-6 font-display text-2xl font-bold text-primary">{group}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team
              .filter((m) => m.group === group)
              .map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft transition-smooth hover:shadow-card"
                >
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <ImagePlaceholder
                      ratio="square"
                      label={`תמונה של ${member.name}`}
                      className="!aspect-square"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {member.role}
                  </p>
                </article>
              ))}
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default Team;
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
