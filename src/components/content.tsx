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
            Parallax effects can add that extra spark to your website. Popular
            in the 2010s, they remain prevalent in today's web design. While
            some view parallax effects as dynamic and visually appealing, others
            find them to detract from the user experience. So, how can we refine
            our use of parallax to create dynamic websites that minimally impact
            accessibility?
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
              It's widely acknowledged that parallax effects can negatively
              affect website usability. This is especially true for individuals
              with accessibility requirements.
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
                screen cluttered with constantly shifting elements, it's going
                to be hard to tell where to focus or how to navigate the page.
              </li>
            </ul>
            <br />
            <p>
              These examples highlight how parallax can create accessibility
              challenges, impacting not only neurodivergent and disabled
              individuals but also a broader audience. Despite their dynamic
              appearance, such visual effects can detract from the overall
              functionality and user experience of a website.
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
              Despite its impact on accessibility, parallax can still be
              utilized effectively to craft a dynamic and engaging website that
              don't hinder access to content.
            </p>

            <br />
            <ul className="list-disc ml-10">
              <li className="mb-3">
                <b>Take it slow.</b> Ensure elements move at a pace that
                achieves the desired effect without overwhelming users. Aim for
                a gentle flow rather than rapid movement.
              </li>
              <li className="mb-3">
                <b>Maintain consistent scrolling speed.</b> When using tools
                like react-scroll-parallax, refrain from implementing easing
                functions that alter an element's speed mid scroll. These can be
                disorienting.
              </li>
              <li className="mb-3">
                <b>Separate text from parallax.</b> Keep text content scrolling
                at the same rate as the user, this maintains readability and
                comfort.
              </li>
              <li>
                <b>Offer options to disable effects.</b> Empower users with the
                choice to turn off animations and parallax features, catering to
                those who prefer a more static experience.
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
              <p>
                In the realm of accessibility-focused design and development,
                acknowledging that every user's needs are different is crucial.
                Engaging users in testing and soliciting direct feedback on
                parallax effects is invaluable. Remember, it's not just
                animations and motion effects that influence user experience.
                Elements like font choice, line height, letter spacing, margins,
                and color contrast also play significant roles in accessibility.
                Below, you'll find a selection of resources on accessibility and
                design that might be helpful going forward!
              </p>
            </p>
            <br />
            <ul className="list-disc ml-10">
              <li className="mb-3">
                <b>"What Parallax Lacks"</b> by Katie Sherwin. A comprehensive
                article on usability with parallax.
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
                <b>"Accessible Website Design for the Neurospicy"</b> by
                Stephanie Shaw. Stephanie's talk at React Advanced London 2023
                covering accessibility in web design.
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
                <b>"Web Content Accessibility Guidelines (WCAG) 2.2"</b> from
                W3C. A wide range of recommendations for making Web content more
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
