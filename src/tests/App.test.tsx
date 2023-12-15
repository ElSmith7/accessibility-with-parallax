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

  it("ensures all images have alt text", () => {
    render(<App />);
    const images = screen.getAllByRole("img");

    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("toggles parallaxEnabled state when NavBar toggle is clicked", () => {
    render(<App />);
    const toggleButton = screen.getByRole("button", {
      name: /parallax is on/i,
    });

    const parallaxImages = screen.getAllByAltText(
      /crumpled paper sketch|typewriter sketch|paper tear/i
    );

    parallaxImages.forEach(async (img) => {
      const parallaxDivBeforeToggle = img.parentNode;
      if (parallaxDivBeforeToggle instanceof HTMLElement) {
        await waitFor(() => {
          expect(parallaxDivBeforeToggle.style.transform).toMatch(
            /translateY\((.*?)\)/
          );
        });
      }
    });

    fireEvent.click(toggleButton);

    parallaxImages.forEach((img) => {
      const parallaxDivAfterToggle = img.parentNode;
      if (parallaxDivAfterToggle instanceof HTMLElement) {
        expect(parallaxDivAfterToggle.style.transform).not.toMatch(
          /translateY\((.*?)\)/
        );
      }
    });
  });
});
