import { useState } from "react";
import type {
  FormData,
  FormErrors,
} from "../types/formTypes";

import { useUsers } from "./useUsers";

const defaultForm: FormData = {
  name: "",
  age: "",
  email: "",
  password: "",
};

export function useForm() {
  const { users, addUser } = useUsers();

  //create form state
  const [form, setForm] =
    useState<FormData>(defaultForm);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const nameRegex = /^[A-Za-z\s]+$/;

  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  function validate(
    field: keyof FormData,
    value: string
  ) {
    let error = "";

    switch (field) {
      case "name":
        if (!value)
          error = "Name required";
        else if (!nameRegex.test(value))
          error = "Only alphabets allowed";
        break;

      case "age":
        if (!value)
          error = "Age required";
        else if (Number(value) < 18)
          error = "Must be 18+";
        break;

      case "email":
        if (!value)
          error = "Email required";
        else if (!emailRegex.test(value))
          error = "Invalid email";
        else if (
          users.some(
            (u) => u.email === value
          )
        )
          error = "Email exists";
        break;

      case "password":
        if (!value)
          error = "Password required";
        else if (
          !passwordRegex.test(value)
        )
          error =
            "Min 8 chars, uppercase, number, special";
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    validate(field, value);
  }

  function handleSubmit() {
    const hasError =
      Object.values(errors).some(Boolean);

    const hasEmpty =
      Object.values(form).some(
        (v) => !v
      );

    if (hasError || hasEmpty) {
      alert("Fix errors first");
      return;
    }

    addUser(form);
    console.log("All users:", [...users, form]);
    alert("User Added Successfully");

    setForm(defaultForm);
  }

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
  };
}