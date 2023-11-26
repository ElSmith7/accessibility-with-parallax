import { Parallax } from "react-scroll-parallax";
import dark_tear from "../images/dark_tear.png";

const Content = () => {
  return (
    <div className="relative">
      <Parallax speed={20}>
        <img className="w-full -mt-40" src={dark_tear} alt="paper tear" />
        <div className="p-28 bg-black" />
      </Parallax>

      <div className=" relative bg-black text-white z-10 -mt-40 pt-32   ">
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2> <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2> <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2> <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2>
        <h2>Content</h2> <h2>Content</h2>
        <h2>Content</h2>
      </div>
    </div>
  );
};
export default Content;
