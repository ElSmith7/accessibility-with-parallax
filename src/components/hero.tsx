import typewriter from "../images/typewriter.png";
import paper1 from "../images/paper1.png";
import paper2 from "../images/paper2.png";
import paper3 from "../images/paper3.png";
import paper4 from "../images/paper4.png";

const Hero = () => {
  return (
    <div className="relative justify-center">
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src={typewriter}
        alt="typewriter sketch"
      />
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src={paper1}
        alt="crumpled paper sketch"
      />
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src={paper2}
        alt="crumpled paper sketch"
      />
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src={paper3}
        alt="crumpled paper sketch"
      />
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src={paper4}
        alt="crumpled paper sketch"
      />
    </div>
  );
};
export default Hero;
