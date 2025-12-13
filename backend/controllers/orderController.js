const db = require("../models/db");

exports.createOrder = (req, res) => {
  const userId = req.userId; // from JWT
  const { cartItems } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // 1️⃣ Insert order
  db.query(
    "INSERT INTO orders (user_id, total) VALUES (?, ?)",
    [userId, total],
    (err, result) => {
      if (err) return res.status(500).json(err);

      const orderId = result.insertId;

      // 2️⃣ Insert order items
      const values = cartItems.map(item => [
        orderId,
        item.id,
        item.quantity || 1,
        item.price
      ]);

      db.query(
        "INSERT INTO order_items (order_id, book_id, quantity, price) VALUES ?",
        [values],
        (err) => {
          if (err) return res.status(500).json(err);
          res.json({ message: "Order placed successfully" });
        }
      );
    }
  );
};
