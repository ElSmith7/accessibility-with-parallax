import { Parallax } from "react-scroll-parallax";
import Section from "./section";
import Footer from "./footer";
import dark_tear from "../images/dark_tear.png";
import light_tear from "../images/light_tear.png";

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
          className={`w-full  ${parallaxEnabled ? " -mt-44 md:-mt-36" : ""}`}
          src={dark_tear}
          alt="paper tear"
        />
        <div className="p-28 bg-black" />
      </Parallax>
      <Section
        id="intro"
        title="Intro"
        padding={padding}
        backgroundColor="bg-black"
        textColor="text-white"
        marginTop="-mt-32 md:-mt-40"
      >
        <p className="text">
          Parallax effects can add that extra spark to your website. Popular in
          the 2010s, they remain prevalent in today's web design. While some
          view parallax effects as dynamic and visually appealing, others find
          them to detract from the user experience. So how can we refine our use
          of parallax to create dynamic websites that have minimal impact on
          accessibility?
        </p>
      </Section>
      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img
          className="w-full -mt-40 md:-mt-44"
          src={light_tear}
          alt="paper tear"
        />
        <div className=" p-28 bg-white" />
      </Parallax>
      <Section id="impact" title="Impact on Accessibility" padding={padding}>
        <p>
          It's widely acknowledged that parallax effects can negatively affect
          website usability. This is especially true for individuals with
          accessibility requirements.
        </p>

        <br />
        <ul className="list-disc ml-5 sm:ml-10">
          <li className="mb-3">
            Imagine you find reading challenging and you suddenly have text
            flying past at a completely different speed than your expecting - it
            makes even more difficult to read.
          </li>
          <li className="mb-3">
            What if you get overwhelmed by too much stimuli? Having a flurry of
            moving images whizz past you in a flash of color could be completely
            overwhelming.
          </li>
          <li>
            If you struggle with concentration and you're bombarded with a
            screen cluttered with constantly shifting elements, it's going to be
            hard to tell where to focus or how to navigate the page.
          </li>
        </ul>
        <br />
        <p>
          These examples highlight how parallax can create accessibility
          challenges, impacting not only neurodivergent and disabled individuals
          but also a broader audience. Despite their dynamic appearance, such
          visual effects can detract from the overall functionality and user
          experience of a website.
        </p>
      </Section>

      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img
          className="w-full -mt-40 md:-mt-44 z-4"
          src={dark_tear}
          alt="paper tear"
        />
        <div className="p-28 bg-black" />
      </Parallax>
      <Section
        id="usage"
        title="Using Parallax"
        padding={padding}
        backgroundColor="bg-black"
        textColor="text-white"
      >
        <p>
          Despite its impact on accessibility, parallax can still be utilized
          effectively to craft a dynamic and engaging website that don't hinder
          access to content.
        </p>

        <br />
        <ul className="list-disc ml-5 sm:ml-10">
          <li className="mb-3">
            <b>Take it slow.</b> Ensure elements move at a pace that achieves
            the desired effect without overwhelming users. Aim for a gentle flow
            rather than rapid movement.
          </li>
          <li className="mb-3">
            <b>Maintain consistent scrolling speed.</b> When using tools like
            react-scroll-parallax, refrain from implementing easing functions
            that alter an element's speed mid scroll. These can be disorienting.
          </li>
          <li className="mb-3">
            <b>Separate text from parallax.</b> Keep text content scrolling at
            the same rate as the user, this maintains readability and comfort.
          </li>
          <li>
            <b>Offer options to disable effects.</b> Empower users with the
            choice to turn off animations and parallax features, catering to
            those who prefer a more static experience.
          </li>
        </ul>
      </Section>

      <Parallax disabled={!parallaxEnabled} speed={20}>
        <img
          className="w-full -mt-40 md:-mt-44 z-5"
          src={light_tear}
          alt="paper tear"
        />
        <div className=" p-28 bg-white" />
      </Parallax>
      <Section id="conclusion" title="Conclusion" padding={padding}>
        <p>
          In the realm of accessibility-focused design and development,
          acknowledging that every user's needs are different is crucial.
          Engaging users in testing and soliciting direct feedback on parallax
          effects is invaluable. Remember, it's not just animations and motion
          effects that influence user experience. Elements like font choice,
          line height, letter spacing, margins, and color contrast also play
          significant roles in accessibility. Below, you'll find a selection of
          resources on accessibility and design that might be helpful going
          forward!
        </p>
        <br />
        <ul className="list-disc ml-5 sm:ml-10">
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
            <b>"Accessible Website Design for the Neurospicy"</b> by Stephanie
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
          <li className="mb-3">
            <b>"Mismatch: How Inclusion Shapes Design"</b> by Kat Holmes. Kat's
            talk for GeekWire covers how UX design can impact who can use what
            tech and how designers should strive to include everyone.
            <a
              className="hover:opacity-60 italic"
              href="https://www.youtube.com/watch?v=SYu6wnZhrBU"
              target="_blank"
              rel="noreferrer"
            >
              Visit here.
            </a>
          </li>
          <li>
            <b>"Web Content Accessibility Guidelines (WCAG) 2.2"</b> from W3C. A
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
      </Section>
      <Footer />
    </div>
  );
};
export default Content;
