import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Index";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/dashboardIndex";
import Layout from "./pages/Dashboard/Layout";
import Product from "./pages/Dashboard/Product";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

export default App;
