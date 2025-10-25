import { useEffect, useState } from "react";
import Categories from "./Categories";
import HomeBanner from "./HomeBanner";
import ProductCard from "./ProductCard";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleAll = () => setSelectedCategory("All");
  const handleElectronics = () => setSelectedCategory("Electronics");
  const handleFruits = () => setSelectedCategory("Fruits");
  const handleVegetables = () => setSelectedCategory("Vegetables");
  const handleGroceries = () => setSelectedCategory("Groceries");
  const handleClothing = () => setSelectedCategory("Clothing");
  const handleBooks = () => setSelectedCategory("Books");
  const handleToy = () => setSelectedCategory("Toy");

  //  Data load
  useEffect(() => {
    axios
      .get("http://localhost:5000/allproducts")
      .then((res) => {
        const allProducts = res.data[0]?.products || [];
        setProducts(allProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Filter logic
const filteredProducts = products.filter(
  (p) => selectedCategory === "All" || p.category === selectedCategory
);


  return (
    <div className="bg-gray-100 min-h-screen">
      <HomeBanner />

      <Categories
        handleAll={handleAll}
        handleElectronics={handleElectronics}
        handleFruits={handleFruits}
        handleVegetables={handleVegetables}
        handleGroceries={handleGroceries}
        handleClothing={handleClothing}
        handleBooks={handleBooks}
        handleToy={handleToy}
        selectedCategory={selectedCategory}
      />

      {/*  Filtered Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
