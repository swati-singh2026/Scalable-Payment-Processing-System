export default function ProductCard({ products, addToCard }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold">{products.name}</h3>
      <p>${products.price}</p>
      <button
        onClick={() => addToCart(products)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
