import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootLoader, postLoader } from "./loaders/loaders";
import { createAction } from "./actions/Actions";

import App from "./App";
import Index from "./pages/Index";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      { index: true, element: <Index /> },
      {
        path: "posts/:id",
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "create",
        element: <CreatePost />,
        action: createAction,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
