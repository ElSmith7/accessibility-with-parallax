import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cup from "../images/Cup.png";
import dark_tear from "../images/dark_tear.png";

const Footer = () => {
  return (
    <section>
      <img
        className="w-full -mt-60 md:-mt-36"
        src={dark_tear}
        alt="paper tear"
      />
      <div className="p-28 bg-black" />

      <footer className="-mt-60 bg-black text-white z-1">
        <div className="xs:flex justify-between font-arimo mx-10 mt-10 sm:mx-16 md:mx-24 ">
          <div className="flex items-center mb-3 xs:mb-0">
            <a
              className="hover:opacity-70"
              href="https://github.com/ElSmith7"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="text-4xl mr-3 md:mr-6 md:text-6xl" />
            </a>
            <a
              className="hover:opacity-70"
              href="https://www.linkedin.com/in/el-smith/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-4xl mr-3 md:mr-6 md:text-6xl" />
            </a>
            <a
              className="hover:opacity-70 w-12 md:w-20"
              href="https://eleanorsmith.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Cup} alt="tea cup" />
            </a>
          </div>
          <div className="text  xs:items-center xs:text-end">
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
    </section>
  );
};

export default Footer;
