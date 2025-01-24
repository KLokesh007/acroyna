


interface TechCardProps {
  icon: string;
  title: string;
  description: string;
}

export function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="tech-card">
      <img src={`/logo/${icon}`} alt={`${title} icon`} className="tech-icon" />
      <h3 className="tech-title">{title}</h3>
      <p className="tech-description">{description}</p>
    </div>
  );
}

