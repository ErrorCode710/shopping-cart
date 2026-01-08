import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import { MemoryRouter } from "react-router";

describe("Header", () => {
  it("should render logoName", () => {
    const cartItems = [1, 2, 3, 4];
    render(<MemoryRouter>
      <Header cartItems={cartItems} />
    </MemoryRouter>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
