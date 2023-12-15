import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Content from "../components/content";

describe("Content Component", () => {
  let parallaxEnabled = true;

  const renderWithProvider = () => {
    render(
      <ParallaxProvider>
        <Content parallaxEnabled={parallaxEnabled} />
      </ParallaxProvider>
    );
  };
  it("renders all sections correctly", () => {
    renderWithProvider();

    expect(screen.getByRole("header", { name: /intro/i })).toBeInTheDocument();
    expect(
      screen.getByRole("header", { name: /Impact on Accessibility/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("header", { name: /Using Parallax/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("header", { name: /Conclusion/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("img", { name: /paper tear/i })).toHaveLength(4);
  });

  it("applies parallaxEnabled styles appropriately", () => {
    renderWithProvider();
    const parallaxImages = screen.getAllByRole("img", { name: /paper tear/i });

    parallaxImages.forEach((img) => {
      expect(img.parentNode).toHaveStyle("transform:/translateY((.*?))/");
    });
  });
});
