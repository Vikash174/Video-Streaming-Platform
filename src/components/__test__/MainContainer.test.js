import { render, screen, within } from "@testing-library/react";
import MainContainer from "../body/main_container/MainContainer";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

it("should render main component", () => {
  render(
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );

  const ul = screen.getAllByRole("list");

  for (const key in ul) {
    if (Object.hasOwnProperty.call(ul, key)) {
      const element = ul[key];

      console.log(key);
    }
  }

  //   expect(ul).toBeInTheDocument();
});
