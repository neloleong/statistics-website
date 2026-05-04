function SectionTitle({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "section-title center" : "section-title"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;