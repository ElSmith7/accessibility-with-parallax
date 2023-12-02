interface NavBarProps {
  toggleParallax: () => void;
  parallaxEnabled: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleParallax, parallaxEnabled }) => {
  return (
    <nav className="sticky z-10 top-0 left-0 w-full flex justify-between items-center py-2 px-4 bg-black text-md font-arimo font-bold">
      <button
        onClick={toggleParallax}
        className={`py-2 px-4 rounded-full transition-colors border-solid border-2 border-white tracking-wide leading-relaxed ${
          parallaxEnabled ? "bg-white" : "bg-black  text-white"
        }`}
      >
        {parallaxEnabled ? "Parallax Is On" : "Parallax Is Off"}
      </button>
      ;
      <div className="flex space-x-4 text-white">
        <a href="#intro">Intro</a>
        <a href="#impact">Impact</a>
        <a href="#usage">Usage</a>
        <a href="#conclusion">Conclusion</a>
      </div>
    </nav>
  );
};

export default NavBar;
