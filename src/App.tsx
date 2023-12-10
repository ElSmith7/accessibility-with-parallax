import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Content from "./components/content";
import NavBar from "./components/nav-bar";
import useWindowSize from "./hooks/use-window-size";

const App = () => {
  const isSmallScreen = useWindowSize();
  const [parallaxEnabled, setParallaxEnabled] = useState(!isSmallScreen);

  useEffect(() => {
    setParallaxEnabled(!isSmallScreen);
  }, [isSmallScreen]);
  return (
    <ParallaxProvider>
      <NavBar
        parallaxEnabled={parallaxEnabled}
        toggleParallax={() => setParallaxEnabled((prev) => !prev)}
      />
      <Hero parallaxEnabled={parallaxEnabled} />
      <Content parallaxEnabled={parallaxEnabled} />
    </ParallaxProvider>
  );
};

export default App;
