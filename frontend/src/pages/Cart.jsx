import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-container">
      <h1 style={{ marginBottom: "20px" }}>
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="cart-item"
            >
              <h3>{item.name}</h3>

              <p
                style={{
                  margin: "10px 0",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                ₹{item.price}
              </p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="total-box">
            Total: ₹{totalPrice}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;