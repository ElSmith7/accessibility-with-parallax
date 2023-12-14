import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import "react-scroll-parallax";

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = MockResizeObserver as any;

describe("App Component", () => {
  it("renders NavBar, Hero, Content, and Footer components", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("navigation")).toBeInTheDocument();
    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("toggles parallaxEnabled state when NavBar toggle is clicked", () => {
    render(<App />);
    const toggleButton = screen.getByRole("button", {
      name: /parallax is on/i,
    });

    const parallaxImages = screen.getAllByAltText(
      /crumpled paper sketch|typewriter sketch|paper tear/
    );
    const parallaxDivBeforeToggle = parallaxImages[0].parentNode;

    expect(parallaxDivBeforeToggle).toHaveStyle(
      "transform: translateY(19.999999999999996px)"
    );

    fireEvent.click(toggleButton);

    const parallaxDivAfterToggle = parallaxImages[0].parentNode;
    expect(parallaxDivAfterToggle).not.toHaveStyle(
      "transform: translateY(19.999999999999996px)"
    );
  });
});
