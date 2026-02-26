import { useState, useEffect } from "react";
import type { FormData, FormErrors, User } from "../types/formTypes";

const defaultForm: FormData = {
  name: "",
  age: "",
  email: "",
  password: "",
};

function getSavedUsers(): User[] {
  const saved = localStorage.getItem("users");
  return saved ? JSON.parse(saved) : [];
}

export default function FormValidation() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [users, setUsers] = useState<User[]>(() => getSavedUsers());
  const [errors, setErrors] = useState<FormErrors>({});

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const validate = (field: keyof FormData, value: string) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value) error = "Name required";
        else if (!nameRegex.test(value))
          error = "Only alphabets allowed";
        break;

      case "age":
        if (!value) error = "Age required";
        else if (Number(value) < 18)
          error = "Age must be 18+";
        break;

      case "email":
        if (!value) error = "Email required";
        else if (!emailRegex.test(value))
          error = "Invalid email format";
        else if (getSavedUsers().some((u) => u.email === value))
          error = "Email already exists";
        break;

      case "password":
        if (!value) error = "Password required";
        else if (!passwordRegex.test(value))
          error =
            "Min 8 chars, 1 uppercase, 1 number, 1 special char";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    validate(field, value);
  };

  const handleSubmit = () => {
    const hasError = Object.values(errors).some(Boolean);
    const hasEmpty = Object.values(form).some((v) => !v);

    if (hasError || hasEmpty) {
      alert("Please fix errors first");
      return;
    }

    const updatedUsers = [...users, form];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User Added Successfully!");
    console.log("USERLIST",updatedUsers)
    setForm(defaultForm);
  };

  return (
    <div className="card">
      <h2>Form Validation</h2>

      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <small className="error">{errors.name}</small>

      <input
        type="number"
        value={form.age}
        placeholder="Age"
        onChange={(e) => handleChange("age", e.target.value)}
      />
      <small className="error">{errors.age}</small>

      <input
        type="email"
        value={form.email}
        placeholder="Email"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <small className="error">{errors.email}</small>

      <input
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <small className="error">{errors.password}</small>

      <button className="action-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}