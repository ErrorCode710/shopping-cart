import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header", () => {
  it("should render logoName", () => {
    render(<Header />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
