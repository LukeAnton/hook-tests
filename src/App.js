import "./App.css";
import React from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  console.log(values);
  return (
    <div className="App">
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
    </div>
  );
};

export default App;
