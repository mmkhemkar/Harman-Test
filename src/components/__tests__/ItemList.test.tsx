import { render, screen } from "@testing-library/react";
import ItemList from "../ItemList";

describe("ItemList Component", () => {
  test("renders list title", () => {
    render(<ItemList />);

    expect(
      screen.getByText("List Rendering with Keys")
    ).toBeInTheDocument();
  });

  test("renders list items", () => {
    render(<ItemList />);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Mango")).toBeInTheDocument();
  });
});