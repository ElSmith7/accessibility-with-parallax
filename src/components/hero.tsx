import { useParallax } from "react-scroll-parallax";
import typewriter from "../images/typewriter.png";
import paper1 from "../images/paper1.png";
import paper2 from "../images/paper2.png";
import paper3 from "../images/paper3.png";
import paper4 from "../images/paper4.png";

const Hero = () => {
  const parallax0 = useParallax<HTMLDivElement>({ speed: -2 });
  const parallax1 = useParallax<HTMLDivElement>({ speed: 8 });
  const parallax2 = useParallax<HTMLDivElement>({ speed: 5 });
  const parallax3 = useParallax<HTMLDivElement>({ speed: 12 });
  const parallax4 = useParallax<HTMLDivElement>({ speed: 15 });

  return (
    <div
      className="relative flex justify-center items-center "
      style={{ height: "620px" }}
    >
      <div ref={parallax0.ref} className="absolute">
        <img src={typewriter} alt="typewriter sketch" />
      </div>
      <div ref={parallax1.ref} className="absolute">
        <img src={paper1} alt="crumpled paper sketch" />
      </div>
      <div ref={parallax2.ref} className="absolute">
        <img src={paper2} alt="crumpled paper sketch" />
      </div>
      <div ref={parallax3.ref} className="absolute">
        <img src={paper3} alt="crumpled paper sketch" />
      </div>
      <div ref={parallax4.ref} className="absolute">
        <img src={paper4} alt="crumpled paper sketch" />
      </div>
      <h1 className="z-10 text-4xl tracking-wide font-libre font-bold -mt-80 pb-8 text-center leading-10">
        Parallax
        <br />
        and
        <br />
        Accessibility
      </h1>
    </div>
  );
};

export default Hero;
