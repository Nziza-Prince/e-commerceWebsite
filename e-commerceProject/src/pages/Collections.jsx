import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductComponent from '../components/ProductComponent';

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    setCollectionProducts(products);
  }, [products]);

  // Handle Category Filter
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category) // Remove category
        : [...prevCategories, category] // Add category
    );
  };

  // Handle Sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...collectionProducts];
    if (value === 'price-low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'price-high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'newest') {
      sortedProducts.sort((a, b) => b.date - a.date);
    }
    setCollectionProducts(sortedProducts);
  };

  // Filter Products
  useEffect(() => {
    let filteredProducts = [...products];
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    setCollectionProducts(filteredProducts);
  }, [selectedCategories, products]);

  return (
    <div className='flex flex-col md:flex-row font-outfit'>
      {/* Filters Section */}
      <div className="mx-4 md:mx-16 flex flex-col justify-start gap-3 font-outfit mt-[89px] mb-8 md:mb-0">
        <h1 className="text-lg font-bold mb-4 ml-3">FILTER</h1>

        {/* Category Filter */}
        <div className="border p-3 lg:p-4 md:p-2 mb-4 w-full md:w-32">
          <h1 className="font-[Poppins] text-sm font-semibold mb-3">CATEGORIES</h1>
          {['Men', 'Women', 'Kids'].map((category, index) => (
            <div key={index} className="flex gap-3 lg:mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor="">{category}</label>
            </div>
          ))}
        </div>

        {/* Sort By Filter */}
        <div className="border p-3 lg:p-4 md:p-2 mb-4 w-full md:w-32">
          <h1 className="font-[Poppins] text-sm font-semibold mb-2">SORT BY</h1>
          <select
            name="sort-by"
            id="sort-by"
            value={sortOption}
            onChange={handleSortChange}
            className="h-10 px-4 text-sm border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none w-full"
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price Low To High</option>
            <option value="price-high-low">Price High To Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="my-16 font-outfit ml-1 md:mr-16 w-full">
        <section>
          <div className="flex justify-between items-center mb-5">
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionProducts.map((item, index) => (
              <ProductComponent
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collections;
