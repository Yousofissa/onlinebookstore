import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isGmail = (value) => /^[^\s@]+@gmail\.com$/i.test(value);

  const signup = async () => {
    setError("");
    setSuccess("");

    if (!isGmail(email)) {
      setError("Only @gmail.com emails are allowed.");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(data.message || "Signed up successfully!");
      setEmail("");
      setPassword("");
    } else {
      setError(data.message || "Signup failed");
    }
  };

  return (
    <div style={{ maxWidth: "420px" }}>
      <h2>Signup</h2>

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

      
      {success && (
        <div
          style={{
            background: "#e6ffed",
            border: "1px solid #2ecc71",
            color: "#0f5132",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "12px"
          }}
        >
          {success}
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
        onClick={signup}
        style={{
          padding: "10px 14px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;
