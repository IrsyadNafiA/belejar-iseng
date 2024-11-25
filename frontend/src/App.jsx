import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Index";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/dashboardIndex";

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
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default App;
