import { Parallax } from "react-scroll-parallax";
import typewriter from "../images/typewriter.png";
import paper1 from "../images/paper1.png";
import paper2 from "../images/paper2.png";
import paper3 from "../images/paper3.png";
import paper4 from "../images/paper4.png";

interface HeroProps {
  parallaxEnabled: boolean;
}

const Hero: React.FC<HeroProps> = ({ parallaxEnabled }) => {
  return (
    <div
      className="relative flex justify-center items-center "
      style={{ height: "620px" }}
    >
      <Parallax disabled={!parallaxEnabled} speed={-2} className="absolute">
        <img src={typewriter} alt="typewriter sketch" />
      </Parallax>
      <Parallax disabled={!parallaxEnabled} speed={5} className="absolute">
        <img src={paper1} alt="crumpled paper sketch" />
      </Parallax>
      <Parallax disabled={!parallaxEnabled} speed={8} className="absolute">
        <img src={paper2} alt="crumpled paper sketch" />
      </Parallax>
      <Parallax disabled={!parallaxEnabled} speed={12} className="absolute">
        <img src={paper3} alt="crumpled paper sketch" />
      </Parallax>
      <Parallax disabled={!parallaxEnabled} speed={15} className="absolute">
        <img src={paper4} alt="crumpled paper sketch" />
      </Parallax>
      <h1 className="z-10 text-4xl tracking-wide font-elite font-bold -mt-80 pb-8 text-center leading-10">
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
