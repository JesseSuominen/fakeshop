import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { expect, it } from "vitest";

import App from "../App";

describe("Page render test", () => {
  it("Should render the home page", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(<App />);
    const textElement = screen.getByText("Welcome to");
    expect(textElement).toBeInTheDocument();
  });

  it("Should render the product list page", () => {
    const history = createMemoryHistory();
    history.push("/products");
    render(<App />);
    const textElement = screen.getByText("Products");
    expect(textElement).toBeInTheDocument();
  });

  it("Should render the about page", () => {
    const history = createMemoryHistory();
    history.push("/about");
    render(<App />);
    const textElement = screen.getByText("About");
    expect(textElement).toBeInTheDocument();
  });
});
