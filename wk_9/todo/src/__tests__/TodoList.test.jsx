import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import TodoList from "../components/TodoList/TodoList";
import TodoProvider from "../context/TodoProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

describe("Todo", () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <TodoList />,
    },
  ]);
  const TodoListWithProvider = () => {
    return (
      <TodoProvider>
        <RouterProvider router={browserRouter}>
          <TodoList />
        </RouterProvider>
      </TodoProvider>
    );
  };

  test("component renders", () => {
    render(<TodoListWithProvider />);
    expect(screen.getByText("Todos completed:")).toBeDefined();
    expect(screen.getByText("Generate")).toBeDefined();
  });
});
