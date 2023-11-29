import { Parallax } from "react-scroll-parallax";
import dark_tear from "../images/dark_tear.png";
import light_tear from "../images/light_tear.png";

const Content = () => {
  return (
    <div className="relative">
      <Parallax speed={20}>
        <img className="w-full -mt-40" src={dark_tear} alt="paper tear" />
        <div className="p-28 bg-black" />
      </Parallax>

      <div className="relative bg-black text-white z-1 -mt-40 pt-32 pb-80">
        <div className="font-arimo mx-36 ">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Intro
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            Parallax effects can add that extra spark to your website. They were
            all the rage in the 2010s and are still widely used in web design
            today. For some, parallax effects mean a dynamic and eye-catching
            website, to many others it means a terrible user experience. So how
            can we improve our implementation of parallax effects and use it to
            create dynamic websites that have little to no interference with
            accessibility needs. Let's dive in!
          </p>
        </div>
      </div>
      <Parallax speed={20}>
        <img className="w-full -mt-44 z-2" src={light_tear} alt="paper tear" />
        <div className=" p-28 bg-white" />
      </Parallax>
      <div className="relative z-3 -mt-44 pt-32 pb-60">
        <div className="font-arimo mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Impact on Accessibility
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            Imagine you find reading challenging and you suddenly have text
            flying past at a completely different speed than your expecting - it
            makes even more difficult to read. What if you get overwhelmed by
            too much stimuli? Having a flurry of moving images whizz past you in
            a flash of color could be completely overwhelming. If you struggle
            with concentration and you're bombarded with a continuously changing
            fluctuation of items on your screen - spinning, scrolling, fading in
            and out - it's going to be pretty hard to tell where to look or how
            to use the page. And these aren't just problems that effect
            neurodivergent and disabled people, using parallax effects has the
            potential to turn away many different users based on the fact that
            while they might look "dynamic" they can have a negative impact on
            the functionality of your website.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
