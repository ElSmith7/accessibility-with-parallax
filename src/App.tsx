import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/hero";
import Content from "./components/content";

const App = () => {
  return (
    <ParallaxProvider>
      <Hero />
      <Content />
    </ParallaxProvider>
  );
};

export default App;
