import { Parallax } from "react-scroll-parallax";
import dark_tear from "../images/dark_tear.png";

const Content = () => {
  return (
    <div className="relative">
      <Parallax speed={24}>
        <img
          className="absolute w-full -mt-32"
          src={dark_tear}
          alt="paper tear"
        />
        <div className="p-32 bg-black" />
      </Parallax>

      <div className=" relative bg-black mt-10 text-white z-10 -mt-32">
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
