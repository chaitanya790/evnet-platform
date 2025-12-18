import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

const submit = async () => {
  try {
    console.log("Sending form:", form);

    await API.post("/auth/signup", {
      name: form.name,
      email: form.email,
      password: form.password,
    });

    alert("Registered successfully");
  } catch (err) {
    console.error(err.response);
    alert(err.response?.data?.message || "Registration failed");
  }
};




  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold text-center">Register</h2>
        <input className="input" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="input" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn" onClick={submit}>Register</button>
      </div>
    </div>
  );
}

