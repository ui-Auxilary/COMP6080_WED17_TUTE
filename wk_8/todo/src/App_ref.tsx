import "./App.css";
import TodoProvider from "./context/TodoProvider";
import Create from "./pages/Create/Create_ref";
import Todos from "./pages/Todos/Todos";

import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todos />,
    },
    {
      path: "/create",
      element: <Create />,
    },
  ]);

  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
}

export default App;
