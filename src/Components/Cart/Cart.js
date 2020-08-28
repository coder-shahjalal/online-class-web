import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let tax = 0;

  if (total > 35) {
    tax = 0;
  } else if (total > 15) {
    tax = 4.99;
  } else if (total > 0) {
    tax = 12.99;
  }

  const grandTotal = (total + tax).toFixed(2);
  return (
    <div>
      <h4>purchases Detail</h4>
      <p>Purchases Count:{cart.length}</p>
      <p>Amount:${total.toFixed(2)}</p>
      <p>
        <small>Total Tax:$ {tax}</small>
      </p>
      <p>Total Amount: ${grandTotal}</p>
      <button className="btn buton btn-danger">Purchases Course</button>
    </div>
  );
};

export default Cart;
