import { useForm } from "../hooks/useForm";

export default function FormValidation() {
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
  } = useForm();

  return (
    <div className="card">
      <h2>Form Validation</h2>

      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => {
          const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
          handleChange("name", onlyLetters);
        }}
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