function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">

      <img src={image} alt={name} className="mb-4 rounded" />

      <h3 className="font-medium">{name}</h3>

      <p className="text-orange-500 mt-2">{price}</p>

    </div>
  );
}

export default ProductCard;