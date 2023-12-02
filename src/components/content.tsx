import { Parallax } from "react-scroll-parallax";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import dark_tear from "../images/dark_tear.png";
import light_tear from "../images/light_tear.png";
import Cup from "../images/Cup.png";

interface ContentProps {
  parallaxEnabled: boolean;
}

const Content: React.FC<ContentProps> = ({ parallaxEnabled }) => {
  let padding;
  if (parallaxEnabled) {
    padding = "pt-32 pb-72";
  } else {
    padding = "pt-16 pb-96";
  }

  return (
    <div className="relative">
      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img
          className={`w-full ${parallaxEnabled ? "-mt-36" : ""}`}
          src={dark_tear}
          alt="paper tear"
        />
        <div className="p-28 bg-black" />
      </Parallax>

      <div
        id="intro"
        className={`relative bg-black text-white z-1 -mt-40   ${padding} `}
      >
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
      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img className="w-full -mt-44 z-2" src={light_tear} alt="paper tear" />
        <div className=" p-28 bg-white" />
      </Parallax>
      <div id="impact" className={`relative z-3 -mt-44  ${padding}`}>
        <div className="font-arimo mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Impact on Accessibility
          </h1>
          <br />
          <div className="text-lg tracking-wide leading-relaxed">
            <p>
              We all know that there are many elements of parallax effects that
              can negatively impact the usability of a website. But moving
              content at varying speeds can have particular repercussion on
              users with accessibility needs.
            </p>
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
            <p>
              These are just a few examples of the issues parallax can cause and
              these problems don't just effect neurodivergent and disabled
              people. Using these visual effects has the potential to turn away
              many different users as while they might look "dynamic" they can
              have a negative impact on the aesthetic functionality of your
              website.
            </p>
          </div>
        </div>
      </div>
      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img className="w-full -mt-44 z-3" src={dark_tear} alt="paper tear" />
        <div className=" p-28 bg-black" />
      </Parallax>
      <div id="usage" className={`relative bg-black z-5 -mt-44  ${padding}`}>
        <div className="font-arimo text-white mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            Using Parallax
          </h1>
          <br />
          <div className="text-lg tracking-wide leading-relaxed">
            <p>
              While there are aspects of the effects that impact accessibility,
              there are still many ways to use parallax to create a dynamic,
              interactive website that doesn't interfere with access to content.
            </p>
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
          </div>
        </div>
      </div>
      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img className="w-full -mt-44 z-5" src={light_tear} alt="paper tear" />
        <div className=" p-28 bg-white" />
      </Parallax>
      <div id="conclusion" className={`relative z-6 -mt-44  ${padding}`}>
        <div className="font-arimo mx-36">
          <h1 className="font-bold text-5xl tracking-wide leading-relaxed">
            In Conclusion
          </h1>
          <br />
          <div className="text-lg tracking-wide leading-relaxed">
            <p>
              When designing and coding with accessibility in mind iot's
              important to remember everyone's different and one of the best
              hings you can do to see if and how your parallax effects might
              impact it is to get users to test it and give you direct feedback
              on it. Keep in mind that moving effects and animations aren't the
              only thing that alter a user's experience. There are many design
              choices that have an impact. For instance fonts, line height,
              letter spacing, margins, color contrast will all have an impact on
              the accessibility of your website. Below I have listen some
              resources on accessibility and design that might come in handy!
            </p>
            <br />
            <ul className="list-disc ml-10">
              <li className="mb-3">
                "What Parallax Lacks" by Katie Sherwin. A comprehensive article
                on usability with parallax.
                <a
                  className="hover:opacity-60 italic"
                  href="https://www.nngroup.com/articles/parallax-usability/#:~:text=Summary%3A%20Parallax%2Dscrolling%20effects%20add,benefits%20are%20worth%20the%20cost."
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit here.
                </a>
              </li>
              <li className="mb-3">
                "Accessible Website Design for the Neurospicy" by Stephanie
                Shaw. Stephanie's talk at React Advanced London 2023 covering
                accessibility in web design.
                <a
                  className="hover:opacity-60 italic"
                  href="https://portal.gitnation.org/contents/thinking-differently-about-a11y-accessible-website-design-for-the-neurospicy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit here.
                </a>
              </li>
              <li>
                "Web Content Accessibility Guidelines (WCAG) 2.2" from W3C. A
                wide range of recommendations for making Web content more
                accessible.
                <a
                  className="hover:opacity-60 italic"
                  href="https://www.w3.org/TR/WCAG22/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit here.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img className="w-full -mt-36" src={dark_tear} alt="paper tear" />
      <div className="p-28 bg-black" />

      <footer className={`relative bg-black text-white z-1 -mt-60`}>
        <div
          className={`flex justify-between font-arimo mx-36 ${
            parallaxEnabled ? "-mt-20" : ""
          }`}
        >
          <div className="flex items-center">
            <a
              className="hover:opacity-70"
              href="https://github.com/ElSmith7"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-6xl mr-6" />
            </a>
            <a
              className="hover:opacity-70"
              href="https://www.linkedin.com/in/el-smith/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-6xl mr-6" />
            </a>
            <a
              className="hover:opacity-70 w-20"
              href="https://eleanorsmith.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Cup} alt="tea cup" />
            </a>
          </div>
          <div className="text-lg tracking-wide leading-relaxed text-end items-center">
            <h4>
              Website by{" "}
              <a
                className="hover:opacity-70"
                href="https://eleanorsmith.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Eleanor Smith
              </a>
            </h4>
            <a
              className="hover:opacity-70"
              href="mailto:el.mortonsmith@gmail.com"
            >
              el.mortonsmith@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Content;
