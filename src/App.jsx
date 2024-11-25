import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import ProductList from "./pages/ProductList";
import AboutPage from "./pages/AboutPage";
import RootLayout from "./components/RootLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:ProductId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="Background">
      <RouterProvider data-testid="router-provider" router={router} />
    </div>
  );
}

export default App;
