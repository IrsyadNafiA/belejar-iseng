import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Index";
import Login from "./pages/Auth/Login";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default App;
