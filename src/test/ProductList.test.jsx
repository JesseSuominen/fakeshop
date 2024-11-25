import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";

describe("ProductList tests", () => {
  it("Should render the product list page title", () => {
    render(<ProductList />);
    const textElement = screen.getByText("Products", { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  it("Should render the product list page content", async () => {
    render(<ProductList />, { wrapper: MemoryRouter });
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  it("Should render 20 products", async () => {
    render(<ProductList />, { wrapper: MemoryRouter });
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).toHaveLength(20);
  });
});
