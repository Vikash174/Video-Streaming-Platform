import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import MainContainer from "./components/body/main_container/MainContainer";
import VideoPlayingPage from "./components/video_playing_page/VideoPlayingPage";
import SearchResultContainer from "./components/body/main_container/SearchResultContainer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <VideoPlayingPage />,
        },
        {
          path: "/results",
          element: <SearchResultContainer />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
