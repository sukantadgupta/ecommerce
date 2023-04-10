import React from 'react';

const Cart = ({ cartElements ,  onRemoveItem }) => {
  return (
    <div>
      {cartElements.map((element, index) => (
        <div key={index}>
          <h3>{element.title}</h3>
          <p>Price: ${element.price}</p>
          <p>Quantity: {element.quantity}</p>
          <img src={element.imageUrl} alt={element.title} />
          <button  onClick={() => onRemoveItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;