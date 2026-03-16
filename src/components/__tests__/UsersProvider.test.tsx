import { renderHook, act } from "@testing-library/react";
import { useUsers } from "../../hooks/useUsers";
import { UsersProvider } from "../../context/UsersProvider";

describe("UsersProvider", () => {

  test("adds user to context", () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = ({ children }: any) => (
      <UsersProvider>{children}</UsersProvider>
    );

    const { result } = renderHook(() => useUsers(), { wrapper });

    act(() => {
      result.current.addUser({
        name: "Mayur",
        age: "25",
        email: "mayur@test.com",
        password: "Password@1",
      });
    });

    expect(result.current.users.length).toBe(1);

  });

});