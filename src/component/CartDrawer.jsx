import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

const CartDrawer = () => {
  const { cartItems, showCart, setShowCart, clearCart, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const cartRef = useRef(null);

  const phoneNumber = "2347042584760";

  const handleCheckout = () => {
  if (cartItems.length === 0) return;

  const itemsList = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} — Size: ${item.selectedSize}, Qty: ${item.quantity}, Total: ₦${(
          item.price * item.quantity
        ).toLocaleString("en-NG")}`
    )
    .join("\n");

  const message = `Hello, I want to place an order. Here are the items:\n\n${itemsList}\n\nSubtotal: ₦${subtotal.toLocaleString(
    "en-NG"
  )}\n\nPlease confirm availability.`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(url, "_blank");

  // Auto-clear cart
  clearCart();

  // Close drawer (optional)
  setShowCart(false);
};


  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          cartRef.current && !cartRef.current.contains(event.target)) {
          setShowCart(false);
      }
      }
      document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
  },[cartRef, setShowCart])

  return (
    <div 
    ref={cartRef}
    className={`fixed top-0 right-0 h-full w-[350px] bg-black text-white z-50 transition-transform duration-500 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-5 h-full flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button onClick={() => setShowCart(false)}>✕</button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">Size: {item.selectedSize}</p>
                  <p className='text-sm'>Quantity: {item.quantity}</p>
                  <p>₦{(item.price * item.quantity).toLocaleString('en-NG')}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 transition cursor-pointer"
                  title="Remove item"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-4">
          <p className="text-lg font-semibold">Subtotal: ₦{subtotal.toLocaleString('en-NG')}</p>
          <button onClick={handleCheckout} className="w-full bg-yellow-500 text-black py-3 mt-4 font-bold rounded-lg">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
