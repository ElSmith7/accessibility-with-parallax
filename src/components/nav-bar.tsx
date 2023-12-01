interface NavBarProps {
  toggleParallax: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleParallax }) => {
  return (
    <nav>
      <button className="z-4" onClick={toggleParallax}>
        Toggle Parallax
      </button>
    </nav>
  );
};

export default NavBar;
