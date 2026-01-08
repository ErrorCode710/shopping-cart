import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "../src/components/Checkout/CheckoutList";

describe("Checkout component", () => {
  const defaultProps = {
    productImg: "mock.png",
    productTitle: "Test Product",
    productPrice: 10,
    itemValue: "1",
    onQuantityChange: vi.fn(),
    onClick: vi.fn(),
  };

  it("renders product details correctly", () => {
    render(<Checkout {...defaultProps} />);

    // Check title
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // Check price

    const prices = screen.getAllByText("$10");
    expect(prices).toHaveLength(2);

    // Check quantity input
    const input = screen.getByRole("spinbutton"); // input type="number"
    expect(input.value).toBe("1");

    // Remove button should NOT render when itemValue !== "0"
    expect(screen.queryByText("Remove")).toBeNull();
  });

  it("shows remove button when itemValue is 0", () => {
    render(<Checkout {...defaultProps} itemValue="0" />);

    const removeBtn = screen.getByText("Remove");
    expect(removeBtn).toBeInTheDocument();

    // Click calls onClick handler
    fireEvent.click(removeBtn);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("calls onQuantityChange when input changes", () => {
    render(<Checkout {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "3" } });

    expect(defaultProps.onQuantityChange).toHaveBeenCalledWith("3");
  });
});
