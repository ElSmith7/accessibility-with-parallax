import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import "react-scroll-parallax";

describe("App Component", () => {
  it("renders NavBar, Hero, Content, and Footer components", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("navigation")).toBeInTheDocument();
    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });
});
