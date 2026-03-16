import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { UsersProvider } from "../../context/UsersProvider";
import FormValidation from "../FormValidation";

beforeAll(() => {
  window.alert = jest.fn();
});

describe("FormValidation Component", () => {
  test("shows alert if form is empty", () => {
    render(
      <UsersProvider>
        <FormValidation />
      </UsersProvider>
    );

    fireEvent.click(screen.getByText("Submit"));

    expect(window.alert).toHaveBeenCalledWith("Fix errors first");
  });

  test("allows user to type into inputs", () => {
    render(
      <UsersProvider>
        <FormValidation />
      </UsersProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Mayur" }
    });

    fireEvent.change(screen.getByPlaceholderText("Age"), {
      target: { value: "27" }
    });

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "mayur@gmail.com" }
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "Password@123" }
    });

    expect(screen.getByPlaceholderText("Name")).toHaveValue("Mayur");
  });
});




