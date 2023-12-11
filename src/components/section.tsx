interface sectionProps {
  id: string;
  title: string;
  zIndex: string;
  padding: string;
  marginTop: string;
  backgroundColor: string;
  textColor: string;
  children?: React.ReactNode;
}

const Section: React.FC<sectionProps> = ({
  id,
  title,
  zIndex,
  padding,
  marginTop,
  backgroundColor,
  textColor,
  children,
}) => (
  <section
    id={id}
    className={`relative ${backgroundColor} ${zIndex} ${marginTop} ${padding}`}
  >
    <div className={`font-arimo ${textColor} mx-8 xs:mx-16 sm:mx-24 lg:mx-36 `}>
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
