import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero";

describe("Hero", () => {
  it("should render Hero Title", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/sell/i);
  });
});
