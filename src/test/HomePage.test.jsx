import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import HomePage from "../pages/HomePage";

describe("HomePage tests", () => {
  it("Should show Welcome to", () => {
    render(<HomePage />);
    const textElement = screen.getByText("Welcome to");
    expect(textElement).toBeInTheDocument();
  });

  it("Should show made by", () => {
    render(<HomePage />);
    const textElement = screen.getByText("Made by", { exact: false });
    expect(textElement).toBeInTheDocument();
  });
});
