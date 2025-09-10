import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout, { loader as mainLoader } from "./features/ui/Layout";
import Homepage from "./features/homepage/Hompage";
import Movies from "./features/movies/Movies";
import Series from "./features/series/Series";
import Bookmarked from "./features/bookmarked/Bookmarked";
import Error from "./features/ui/Error.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
