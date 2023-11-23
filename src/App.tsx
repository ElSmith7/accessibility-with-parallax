import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/hero";

const App = () => {
  return (
    <ParallaxProvider>
      <Hero />
    </ParallaxProvider>
  );
};

export default App;
