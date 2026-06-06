interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionTitle = ({ eyebrow, title, description, center }: Props) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="section-title">{title}</h2>
    {description && <p className="lead mt-4">{description}</p>}
  </div>
);

export default SectionTitle;
