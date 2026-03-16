
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter App ", () => {

  test("increase works", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Increase"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrease when count > 0", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Increase"));
    fireEvent.click(screen.getByText("Decrease"));

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("decrease should not go below zero", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Decrease"));

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("reset works", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText("Increase"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("0")).toBeInTheDocument();
  });

});