import React from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart(); 
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
                  <strong>{item.title}</strong> – ${item.price.toFixed(2)}
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
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
