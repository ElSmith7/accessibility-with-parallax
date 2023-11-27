import { Parallax } from "react-scroll-parallax";
import dark_tear from "../images/dark_tear.png";

const Content = () => {
  return (
    <div className="relative">
      <Parallax speed={20}>
        <img className="w-full -mt-40" src={dark_tear} alt="paper tear" />
        <div className=" p-28 bg-black" />
      </Parallax>

      <div className="relative bg-black text-white z-10 -mt-40 py-32">
        <div className="font-arimo mx-24">
          <h1 className="font-bold text-4xl">Intro</h1>
          <br />
          <p className="text-lg">
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
    </div>
  );
};
export default Content;
