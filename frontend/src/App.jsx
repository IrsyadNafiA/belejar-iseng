import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Index";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default App;
