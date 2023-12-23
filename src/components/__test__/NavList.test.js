import NavList from "../body/main_container/NavList";
import { render, screen } from "@testing-library/react";

test("should render NavList", () => {
  render(<NavList />);

  const ul = screen.getByTestId("navUlList");

  expect(ul.childNodes.length).toBe(14);
});
