interface SectionProps {
  id: string;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  marginTop?: string;
  padding?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  backgroundColor,
  textColor,
  marginTop = "-mt-40 md:-mt-44",
  padding,
  children,
}) => (
  <section
    id={id}
    className={`relative ${backgroundColor} ${textColor} ${marginTop} ${padding}`}
  >
    <div className="font-arimo mx-8 xs:mx-16 sm:mx-24 lg:mx-36">
      <h1 className="text-center font-bold text-5xl tracking-wide leading-relaxed sm:text-start">
        {title}
      </h1>
      <br />
      <div className="text-base tracking-wide leading-relaxed sm:text-lg">
        {children}
      </div>
    </div>
  </section>
);

export default Section;
