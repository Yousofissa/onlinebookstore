const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const isGmail = (email) => /^[^\s@]+@gmail\.com$/i.test(email || "");

exports.signup = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  if (!isGmail(email))
    return res.status(400).json({ message: "Only @gmail.com emails are allowed" });

  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, hashedPassword], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY")
        return res.status(400).json({ message: "Email already exists" });
      return res.status(500).json(err);
    }
    res.json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });


  if (!isGmail(email))
    return res.status(400).json({ message: "Only @gmail.com emails are allowed" });

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "1d" });

    res.json({ token, userId: user.id });
  });
};
