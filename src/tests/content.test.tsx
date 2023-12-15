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

    expect(screen.getByRole("heading", { name: /intro/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Impact on Accessibility/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Using Parallax/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Conclusion/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("img", { name: /paper tear/i })).toHaveLength(4);
  });

  it("applies parallaxEnabled styles appropriately", () => {
    renderWithProvider();
    const parallaxImages = screen.getAllByRole("img", { name: /paper tear/i });

    parallaxImages.forEach((img) => {
      const parallaxDiv = img.parentNode;
      if (parallaxDiv instanceof HTMLElement) {
        expect(parallaxDiv.style.transform).toMatch(/translateY\((.*?)\)/);
      }
    });
  });

  it("has correct alt text for images", () => {
    renderWithProvider();
    const parallaxImages = screen.getAllByAltText("paper tear");

    parallaxImages.forEach((image) => {
      expect(image).toHaveAttribute("alt", "paper tear");
    });
  });

  it("contains correct links to external resources", () => {
    renderWithProvider();

    const links = screen.getAllByRole("link");
    expect(
      links.some(
        (link) =>
          link instanceof HTMLAnchorElement &&
          link.href ===
            "https://www.nngroup.com/articles/parallax-usability/#:~:text=Summary%3A%20Parallax%2Dscrolling%20effects%20add,benefits%20are%20worth%20the%20cost."
      )
    ).toBe(true);
    expect(
      links.some(
        (link) =>
          link instanceof HTMLAnchorElement &&
          link.href ===
            "https://portal.gitnation.org/contents/thinking-differently-about-a11y-accessible-website-design-for-the-neurospicy"
      )
    ).toBe(true);
    expect(
      links.some(
        (link) =>
          link instanceof HTMLAnchorElement &&
          link.href === "https://www.youtube.com/watch?v=SYu6wnZhrBU"
      )
    ).toBe(true);
    expect(
      links.some(
        (link) =>
          link instanceof HTMLAnchorElement &&
          link.href === "https://www.w3.org/TR/WCAG22/"
      )
    ).toBe(true);
  });
});
