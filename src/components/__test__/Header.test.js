import { render, screen } from "@testing-library/react";
import Header from "../header/Header";

it("should load header component", () => {
  render(<Header />);

  const heading = screen.getByRole("img");

  expect(heading).toBeInTheDocument();
});
