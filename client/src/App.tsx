import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { Header } from "./components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Project } from "./pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/:id",
    element: <Project />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
