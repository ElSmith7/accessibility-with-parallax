import { useEffect } from "react";
import { useParallaxController } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import typewriter from "../images/typewriter.png";
import paper1 from "../images/paper1.png";
import paper2 from "../images/paper2.png";
import paper3 from "../images/paper3.png";
import paper4 from "../images/paper4.png";
import dark_tear from "../images/dark_tear.png";

const Hero = () => {
  const parallax0 = useParallax<HTMLDivElement>({ speed: -2 });
  const parallax1 = useParallax<HTMLDivElement>({ speed: 8 });
  const parallax2 = useParallax<HTMLDivElement>({ speed: 5 });
  const parallax3 = useParallax<HTMLDivElement>({ speed: 12 });
  const parallax4 = useParallax<HTMLDivElement>({ speed: 15 });
  const parallax5 = useParallax<HTMLDivElement>({ speed: 20 });

  const parallaxController = useParallaxController();

  useEffect(() => {
    if (parallaxController) {
      parallaxController.update();
    }
  }, [parallaxController]);

  return (
    <div>
      <div
        className="relative flex justify-center items-center"
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
      </div>
      <div ref={parallax5.ref}>
        <img
          className="flex w-full z-10 -mt-32"
          src={dark_tear}
          alt="paper tear"
        />
      </div>
    </div>
  );
};

export default Hero;
