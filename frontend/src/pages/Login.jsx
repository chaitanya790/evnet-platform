import { useState } from "react";
import API from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
  try {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input className="input" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn" onClick={submit}>Login</button>
      </div>
    </div>
  );
}
