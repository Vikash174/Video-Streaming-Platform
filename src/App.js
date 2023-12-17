import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import MainContainer from "./components/body/main_container/MainContainer";
import VideoPlayingPage from "./components/video_playing_page/VideoPlayingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <VideoPlayingPage />,
        },
      ],
    },
    {
      path: "/watch",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
