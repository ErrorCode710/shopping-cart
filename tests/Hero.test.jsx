import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero";
// import { useProducts } from "../src/hooks/useProducts";

// vi.mock("../src/hooks/useProducts", () => ({
//   useProducts: () => ({
//     loading: false,
//     error: null,
//     data: [
//       { id: 1, title: "USB", price: 10, image: "img1.png" },
//       { id: 2, title: "Mouse", price: 20, image: "img2.png" },
//       { id: 3, title: "Keyboard", price: 30, image: "img3.png" },
//       { id: 4, title: "Monitor", price: 40, image: "img4.png" },
//       { id: 5, title: "Laptop", price: 50, image: "img5.png" },
//       { id: 6, title: "Phone", price: 60, image: "img6.png" },
//       { id: 7, title: "Tablet", price: 70, image: "img7.png" },
//       { id: 8, title: "Camera", price: 80, image: "img8.png" },
//       { id: 9, title: "Speaker", price: 90, image: "img9.png" },
//     ],
//   }),
// }));

describe("Hero", () => {
  it("renders selected products when data is loaded", () => {
    vi.mock("../src/hooks/useProducts", () => ({
      useProducts: () => ({
        loading: false,
        error: null,
        data: [
          { id: 1, title: "USB", price: 10, image: "img1.png" },
          { id: 2, title: "Mouse", price: 20, image: "img2.png" },
          { id: 3, title: "Keyboard", price: 30, image: "img3.png" },
          { id: 4, title: "Monitor", price: 40, image: "img4.png" },
          { id: 5, title: "Laptop", price: 50, image: "img5.png" },
          { id: 6, title: "Phone", price: 60, image: "img6.png" },
          { id: 7, title: "Tablet", price: 70, image: "img7.png" },
          { id: 8, title: "Camera", price: 80, image: "img8.png" },
          { id: 9, title: "Speaker", price: 90, image: "img9.png" },
        ],
      }),
    }));
    render(<Hero />);
    expect(screen.getByText("USB")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Speaker")).toBeInTheDocument();
  });

  it("should render Hero Title", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/sell/i);
  });
});
