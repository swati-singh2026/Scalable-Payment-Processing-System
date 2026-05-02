/* Cart */

export default function Cart({ cart, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">cart ({cart.length})</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>
            {item.name}*{item.qty}
          </span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3 className="mt-4 font-bold">Total:${total}</h3>
    </div>
  );
}
