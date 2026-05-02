export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 ">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
