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

      <div className="relative bg-black text-white z-1 -mt-40 pt-32 pb-60">
        <div className="font-arimo mx-36 ">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Intro
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            Parallax effects can add that extra spark to your website. That can
            add an extra element of dynamics that draw in the use - making your
            website more fun, inticing, eye-catching sometimes even tacky. While
            parallax effect were all the rage in the 2010s, if its over used
            now, some consider it to be a design faux-par. But some websites
            still go all in - it seems as though some are now trying to bring
            the effect back into the forefront of design. Say what you will
            about this in relation to design - there's another issue at hand.
            For some parallax effects mean a dynamic website, eye-catch and fun
            - to many others it mean a terrible user experience. Sometimes an
            experience so bad it even deters users all together. So why should
            you care about accesibility when using parrallx and how can you use
            it to creater a fun dynamic website that has little to ne
            interferance with accesibility needs. Let's dive in!
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
            Imagine you already struggle with reading text, do you think that
            the experience of reading is made easier when the text is on square
            that flies past your vision at a completely different speed than
            your expecting - it makes the text more difficult to read. What if
            you get overwhelmed by too much stimuli? Having a flurry of moving
            images whizz past you in a flash of color could be completely
            overwhelming. If you struggle with concentration and you're
            bombarded with a continuously changing fluctuation of items on your
            screen - spinning, scrolling, fading in and out - it's going to be
            pretty hard to tell where to look or how to use the page. And these
            aren't just problems that effect neurodivergent or disabled people,
            using parallax effects have the potential to turn away many
            different users based on the fact that while they might look
            "dynamic" they can have a negative impact on the functionality of
            your website.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
