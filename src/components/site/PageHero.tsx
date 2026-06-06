interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="bg-gradient-hero border-b border-border/60">
    <div className="container-narrow py-14 md:py-20">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h1 className="font-display text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="lead mt-5 max-w-3xl">{description}</p>
      )}
    </div>
  </section>
);

export default PageHero;
