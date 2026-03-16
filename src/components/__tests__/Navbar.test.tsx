
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Full Coverage", () => {

  test("counter active class", () => {
    const setView = jest.fn();

    render(<Navbar view="counter" setView={setView} />);

    expect(screen.getByText("Counter").className).toContain("active");
  });

  test("form click changes view", () => {
    const setView = jest.fn();

    render(<Navbar view="counter" setView={setView} />);

    fireEvent.click(screen.getByText("Form Validation"));

    expect(setView).toHaveBeenCalledWith("form");
  });

  test("list click changes view", () => {
    const setView = jest.fn();

    render(<Navbar view="counter" setView={setView} />);

    fireEvent.click(screen.getByText("List Rendering"));

    expect(setView).toHaveBeenCalledWith("list");
  });

});