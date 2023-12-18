import { render, screen } from "@testing-library/react";
import Header from "../header/Header";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

it("should load header component", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const heading = screen.getByRole("img");

  expect(heading).toBeInTheDocument();
});
