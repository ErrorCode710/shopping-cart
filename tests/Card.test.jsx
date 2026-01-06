import Card from "../src/components/Card/index";
import img from "../public/vite.svg";
import { getByRole, render, screen } from "@testing-library/react";
import { expect } from "vitest";
describe("Card", () => {
  it("should render Card Component with properprops ", () => {
    render(<Card productTitle="USB" productPrice="10" productImg={img}></Card>);

    expect(screen.getByText(/usb/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it("renders properly even without props", () => {
    render(<Card />);

    expect(screen.getByText(/no title/i)).toBeInTheDocument();
    expect(screen.getByText(/n\/a/i)).toBeInTheDocument();
    expect(screen.getByText(/no image/i)).toBeInTheDocument();
  });
});
