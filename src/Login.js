import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isGmail = (value) => /^[^\s@]+@gmail\.com$/i.test(value);

  const handleLogin = async () => {
    setError("");

    if (!isGmail(email)) {
      setError("Only @gmail.com emails are allowed.");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      window.location.reload();
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "420px" }}>
      <h2>Login</h2>

      {error && (
        <div
          style={{
            background: "#ffe5e5",
            border: "1px solid #ff4d4d",
            color: "#b30000",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "12px"
          }}
        >
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email (@gmail.com only)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 14px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
