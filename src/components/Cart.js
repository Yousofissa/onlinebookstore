import React from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = async () => {
    
    console.log("CHECKOUT CLICKED");
    console.log("CART ITEMS:", cartItems);
    console.log("TOKEN:", localStorage.getItem("token"));

    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      console.log("SENDING REQUEST TO BACKEND");

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          cartItems: cartItems
        })
      });

      console.log("RESPONSE STATUS:", res.status);

      const data = await res.json();
      console.log("RESPONSE DATA:", data);

      if (!res.ok) {
        alert(data.message || "Order failed");
        return;
      }

      alert("Order placed successfully!");
      clearCart();
    } catch (error) {
      console.error("FETCH ERROR:", error);
      alert("Server error");
    }
  };

return (
  <section className="cart-wrapper">
    <div className="cart-card">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-row">
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <span>${Number(item.price).toFixed(2)}</span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  </section>
);
}

export default Cart;
