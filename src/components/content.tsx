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

      <div className="relative bg-black text-white z-1 -mt-40 pt-32 pb-72">
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
      <div className="relative z-3 -mt-44 pt-32 pb-72">
        <div className="font-arimo mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Impact on Accessibility
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            We all know that there are many elements of parallax effects that
            can negatively impact the usability of a website. But moving content
            at varying speeds can have particular repercussion on users with
            accessibility needs.
            <br />
            <br />
            <ul className="list-disc ml-10">
              <li className="mb-3">
                Imagine you find reading challenging and you suddenly have text
                flying past at a completely different speed than your expecting
                - it makes even more difficult to read.
              </li>
              <li className="mb-3">
                What if you get overwhelmed by too much stimuli? Having a flurry
                of moving images whizz past you in a flash of color could be
                completely overwhelming.
              </li>
              <li>
                If you struggle with concentration and you're bombarded with a
                continuously changing fluctuation of items on your screen, it's
                going to be pretty hard to tell where to focus or even how to
                navigate the page.
              </li>
            </ul>
            <br />
            These are just a few examples of the issues parallax can cause and
            these problems don't just effect neurodivergent and disabled people.
            Using these visual effects has the potential to turn away many
            different users as while they might look "dynamic" they can have a
            negative impact on the aesthetic functionality of your website.
          </p>
        </div>
      </div>
      <Parallax speed={20}>
        <img className="w-full -mt-44 z-3" src={dark_tear} alt="paper tear" />
        <div className=" p-28 bg-black" />
      </Parallax>
      <div className="relative bg-black z-5 -mt-44 pt-32 pb-72">
        <div className="font-arimo text-white mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Accessibility with Parallax?
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            While there are aspects of the effects that impact accessibility,
            there are still many ways to utilize parallax to create a dynamic,
            interactive website that doesn't interfere with access to content.
            <br />
            <br />
            <ul className="list-disc ml-10">
              <li className="mb-3">
                Take it slow. Try to have your elements moving fast enough that
                you get the effect but not much faster. There should be a sense
                of movement rather than a clear rush of motion.
              </li>
              <li className="mb-3">
                Keep parallax effects scrolling at the same rate throughout
                their path. For instance if you're using a library like
                react-scroll-parallax, avoid using "easing". When you change the
                speed of scrolling mid way through the element's path it can be
                extremely jarring.
              </li>
              <li className="mb-3">
                Avoid putting text on parallax elements. Text should always
                scroll at the same rate as the user. In this webpage, for
                instance, the text is separate to all parallax scrolling
                elements. This give a subtle dynamic feel to the page while not
                interfering with the content.
              </li>
              <li>
                And of course, provide a clear way to disable animations and
                effects. Give the user control of their experience because after
                all, some would still much rather interact with a static UI.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Parallax speed={20}>
        <img className="w-full -mt-44 z-5" src={light_tear} alt="paper tear" />
        <div className=" p-28 bg-white" />
      </Parallax>
      <div className="relative z-6 -mt-44 pt-32 pb-72">
        <div className="font-arimo mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            In Conclusion
          </h1>
          <br />
          <p className="text-lg tracking-wide leading-relaxed">
            When designing and coding with accessibility in mind iot's important
            to remember everyone's different and one of the best hings you can
            do to see if and how your parallax effects might impact it is to get
            users to test it and give you direct feedback on it. Keep in mind
            that moving effects and animations aren't the only thing that alter
            a user's experience. There are many design choices that have an
            impact. For instance fonts, line height, letter spacing, margins,
            color contrast will all have an impact on the accessibility of your
            website. Below I have listen some resources on accessibility and
            design that might come in handy!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Content;
