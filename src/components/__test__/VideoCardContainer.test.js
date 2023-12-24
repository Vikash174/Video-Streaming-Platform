import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import VideoCardContainer from "./VideoCardContainer";

// Mocking the custom hook
jest.mock("../../../custom_hooks/useAddPopularMoviesToStore", () => jest.fn());

const mockStore = configureStore([]);

describe("VideoCardContainer Component", () => {
  it("renders VideoCardContainer component with popular videos", () => {
    const popularVideos = [
      { id: 1, title: "Video 1" },
      { id: 2, title: "Video 2" },
    ];

    const store = mockStore({
      video: {
        popularVideos,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <VideoCardContainer />
        </MemoryRouter>
      </Provider>
    );

    // Check if VideoCardContainer renders with the correct number of VideoCard components
    expect(screen.getAllByTestId("video-card")).toHaveLength(
      popularVideos.length
    );
  });

  it("renders VideoCardContainer component with no popular videos", () => {
    const store = mockStore({
      video: {
        popularVideos: [],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <VideoCardContainer />
        </MemoryRouter>
      </Provider>
    );

    // Check if VideoCardContainer renders with no VideoCard components
    expect(screen.queryByTestId("video-card")).toBeNull();
  });
});
