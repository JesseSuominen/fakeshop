import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

describe("Navigation tests", () => {
  test("renders MainNavigation Home component", () => {
    const { getByText } = render(
      <MemoryRouter basename="/">
        <MainNavigation />
      </MemoryRouter>
    );
    expect(getByText("Home")).toBeInTheDocument();
  });

  test("renders MainNavigation Products component", () => {
    const { getByText } = render(
      <MemoryRouter basename="/">
        <MainNavigation />
      </MemoryRouter>
    );
    expect(getByText("Products")).toBeInTheDocument();
  });

  test("renders MainNavigation About component", () => {
    const { getByText } = render(
      <MemoryRouter basename="/">
        <MainNavigation />
      </MemoryRouter>
    );
    expect(getByText("About")).toBeInTheDocument();
  });
});
