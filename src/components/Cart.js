import React from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          cartItems
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Order failed");
        return;
      }

      alert("Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Server error. Try again.");
    }
  };

  return (
    <section className="page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <strong>{item.title}</strong> – $
                  {item.price.toFixed(2)}
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className="cart-total">Total: ${total.toFixed(2)}</p>

          <button className="btn" onClick={handleCheckout}>
            Place Order
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
