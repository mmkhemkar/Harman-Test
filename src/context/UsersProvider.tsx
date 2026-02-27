import { useState, useEffect } from "react";
import type { User } from "../types/formTypes";
import { UsersContext } from "./UsersContext";

function getSavedUsers(): User[] {
  const saved = localStorage.getItem("users");
  return saved ? JSON.parse(saved) : [];
}

//This provides global user data to all components.
export function UsersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [users, setUsers] =
    useState<User[]>(getSavedUsers);

  useEffect(() => {
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
  }, [users]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    //all components can access users.
    <UsersContext.Provider
      value={{ users, addUser }}
    >
      {children}
    </UsersContext.Provider>
  );
}