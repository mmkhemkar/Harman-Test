import { renderHook } from "@testing-library/react";
import { useUsers } from "../../hooks/useUsers";

describe("useUsers Hook", () => {

  test("throws error when used outside provider", () => {

    const { result } = renderHook(() => {
      try {
        useUsers();
      } catch (error) {
        return error;
      }
    });

    expect(result.current).toBeInstanceOf(Error);

  });

});