import { createContext } from "react";
import type { User } from "../types/formTypes";

export type UsersContextType = {
  users: User[];
  addUser: (user: User) => void;
};

export const UsersContext =
  createContext<UsersContextType | undefined>(
    undefined
  );