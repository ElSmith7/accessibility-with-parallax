import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";
import Hero from "./components/hero";
import Content from "./components/content";
import NavBar from "./components/nav-bar";

const App = () => {
  const [parallaxEnabled, setParallaxEnabled] = useState(true);

  return (
    <ParallaxProvider>
      <NavBar toggleParallax={() => setParallaxEnabled((prev) => !prev)} />
      <Hero parallaxEnabled={parallaxEnabled} />
      <Content parallaxEnabled={parallaxEnabled} />
    </ParallaxProvider>
  );
};

export default App;
