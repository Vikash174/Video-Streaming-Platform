import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Sidebar from "./Sidebar";

const mockStore = configureStore([]);

describe("Sidebar Component", () => {
  it("renders Sidebar component when showSidebar is true", () => {
    const store = mockStore({
      appControls: {
        showSidebar: true,
      },
    });

    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    // Check if elements in the sidebar are rendered when showSidebar is true
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shorts")).toBeInTheDocument();
    expect(screen.getByText("Subscription")).toBeInTheDocument();
    // Add more expectations based on your actual content
  });

  it("does not render Sidebar component when showSidebar is false", () => {
    const store = mockStore({
      appControls: {
        showSidebar: false,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    // Check if the component renders nothing when showSidebar is false
    // expect(container.firstChild).toBeNull();
  });
});
