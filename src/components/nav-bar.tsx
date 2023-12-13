interface NavBarProps {
  toggleParallax: () => void;
  parallaxEnabled: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleParallax, parallaxEnabled }) => {
  return (
    <nav className="sticky z-10 top-0 left-0 w-full flex justify-center items-center py-2 px-4 bg-black text-md font-arimo font-bold xs:justify-between">
      <button
        onClick={toggleParallax}
        className={`hidden py-2 px-4 rounded-full transition-colors border-solid border-2 border-white tracking-wide leading-relaxed xs:block ${
          parallaxEnabled ? "bg-neutral-50" : "bg-black  text-neutral-50"
        }`}
      >
        {parallaxEnabled ? "Parallax Is On" : "Parallax Is Off"}
      </button>
      ;
      <div className="flex space-x-4 text-neutral-50">
        <a className="hover:opacity-70" href="#intro">
          Intro
        </a>
        <a className="hover:opacity-70" href="#impact">
          Impact
        </a>
        <a className="hover:opacity-70" href="#usage">
          Usage
        </a>
        <a className="hover:opacity-70" href="#conclusion">
          Conclusion
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
