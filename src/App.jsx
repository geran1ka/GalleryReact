import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { List } from "./components/Main/List/List";
import { NotFound } from "./components/NotFound/NotFound";
import { Photo } from "./components/Photo/Photo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <List />
        </main>
      </>
    ),
  },
  {
    path: "/auth",
    element: (
      <>
        <Header />
        <main>
          <List />
        </main>
      </>
    ),
  },
  {
    path: "/photo/:id",
    element: (
      <>
        <Header />
        <main>
          <Photo />
        </main>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <main>
          <NotFound />
        </main>
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
