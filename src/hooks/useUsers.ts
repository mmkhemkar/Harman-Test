import { useContext } from "react";
import {
  UsersContext,
  type UsersContextType,
} from "../context/UsersContext";

export function useUsers(): UsersContextType {
  //Gets global data.
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error(
      "useUsers must be used inside UsersProvider"
    );
  }

  return context;
}