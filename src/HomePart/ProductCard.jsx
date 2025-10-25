const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <figure>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-gray-500">${product.price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
