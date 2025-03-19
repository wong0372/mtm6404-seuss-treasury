import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import Quotes from "../pages/Quotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
    ],
  },
]);

export default router;
