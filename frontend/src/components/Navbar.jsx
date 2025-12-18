import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold">Event Platform</h1>

      <div className="space-x-4">
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}

        {token && <Link to="/dashboard">Dashboard</Link>}
        {token && <Link to="/create">Create Event</Link>}

        {token && (
          <button onClick={logout} className="ml-4 underline">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}



