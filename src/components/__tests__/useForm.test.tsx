import { renderHook, act } from "@testing-library/react";
import { UsersProvider } from "../../context/UsersProvider";
import { useForm } from "../../hooks/useForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wrapper = ({ children }: any) => (
  <UsersProvider>{children}</UsersProvider>
);

describe("useForm hook full coverage", () => {

  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("name validations", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => result.current.handleChange("name", ""));
    expect(result.current.errors.name).toBe("Name required");

    act(() => result.current.handleChange("name", "123"));
    expect(result.current.errors.name).toBe("Only alphabets allowed");

    act(() => result.current.handleChange("name", "Mayur"));
    expect(result.current.errors.name).toBe("");
  });

  test("age validations", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => result.current.handleChange("age", ""));
    expect(result.current.errors.age).toBe("Age required");

    act(() => result.current.handleChange("age", "10"));
    expect(result.current.errors.age).toBe("Must be 18+");

    act(() => result.current.handleChange("age", "25"));
    expect(result.current.errors.age).toBe("");
  });

  test("email validations", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => result.current.handleChange("email", ""));
    expect(result.current.errors.email).toBe("Email required");

    act(() => result.current.handleChange("email", "abc"));
    expect(result.current.errors.email).toBe("Invalid email");

    act(() => result.current.handleChange("email", "test@test.com"));
    expect(result.current.errors.email).toBe("");
  });

  test("password validations", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => result.current.handleChange("password", ""));
    expect(result.current.errors.password).toBe("Password required");

    act(() => result.current.handleChange("password", "123"));
    expect(result.current.errors.password)
      .toBe("Min 8 chars, uppercase, number, special");

    act(() => result.current.handleChange("password", "Password@1"));
    expect(result.current.errors.password).toBe("");
  });

  test("submit with errors shows alert", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => result.current.handleSubmit());

    expect(window.alert).toHaveBeenCalledWith("Fix errors first");
  });

  test("successful submit", () => {
    const { result } = renderHook(() => useForm(), { wrapper });

    act(() => {
      result.current.handleChange("name", "Mayur");
      result.current.handleChange("age", "25");
      result.current.handleChange("email", "mayur@test.com");
      result.current.handleChange("password", "Password@1");
    });

    act(() => result.current.handleSubmit());

    expect(window.alert).toHaveBeenCalledWith("User Added Successfully");
  });

});