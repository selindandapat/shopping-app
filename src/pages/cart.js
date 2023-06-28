import { useContext } from "react";
import { CartContext } from "../contexts/context";
import "./cart.css";

const Cart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <flag className="pic" >
            <img src={item.image} alt="" />
            </flag>
            <p className="name">{item.title}</p>
            <flag className="amt">
            <p>${item.quantity * item.price}</p>
            </flag>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>$.{total.toFixed(2)}</h2>
        </div>
      )}
      <div>
        <button className="checkout"><span>Checkout</span></button>
      </div>
    </div>
  );
};

export default Cart;