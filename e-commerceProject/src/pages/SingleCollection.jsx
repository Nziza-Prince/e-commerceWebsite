import Orange from "../assets/frontend_assets/star_icon.png";
import dullStar from "../assets/frontend_assets/star_dull_icon.png";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";

const SingleCollection = () => {
  const {products} = useContext(ShopContext)
  const {id} = useParams()
  const product = products.find((item) => item._id === id);
  
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const [mainImage, setMainImage] = useState(product.image[0]); // Use `product.image`
  const relatedProducts = products.filter((item) => item.category === product.category && item._id !== product._id);

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update the selected size
  };
  return (
    <div className="container mx-auto p-6 border-t font-outfit">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Images Section */}
        <div className="lg:w-1/2">
          <div className="flex flex-col lg:flex-row gap-2">
            {/* Thumbnails */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-2">
              {product.image?.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setMainImage(img)}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-md hover:scale-105 transition-transform duration-200 h-[103px] w-24 object-cover cursor-pointer"
                />
              ))}
            </div>
             <img
              src={mainImage}
              alt="Main Product"
              className="rounded-md h-96 w-full lg:h-[550px] lg:w-[500px] md:h-[550px] object-cover mb-4"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2">
          <h1 className="lg:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <img key={i} className="w-4" src={Orange} alt="Star" />
              ))}
              <img className="w-4" src={dullStar} alt="Star" />
            </div>
            <span className="ml-3 text-sm text-gray-600">(122)</span>
          </div>
          <p className="text-lg lg:text-3xl font-semibold text-gray-900 mb-4">
            {product.currency}
            {product.price}
          </p>
          <p className="text-gray-600 text-sm mt-5 mb-8">
{product.description}
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Size
            </label>
            <div className="flex gap-4">
              {product.sizes.map((size) => (
                <div
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`bg-gray-200 hover:cursor-pointer hover:bg-gray-100 py-2 px-5 text-center ${
                    selectedSize === size
                      ? "border border-orange-500"
                      : "border border-transparent"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <button className="bg-black text-white py-3 px-10 mt-6 w-full lg:w-auto">
            ADD TO CART
          </button>
          <hr className="my-6" />
          <div className="flex flex-col text-left mt-6 text-gray-700 gap-3">
            <p>100% Organic product.</p>
            <p>Can deliver in a week.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16 mb-16">
        <div className="flex">
          <div className="px-6 py-4 border font-semibold">Description</div>
          <div className="px-6 py-4 border text-gray-600 font-semibold">
            Reviews (122)
          </div>
        </div>
        <div className="p-4 lg:p-10 border text-gray-600">
          <p className="mb-4">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Images Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {relatedProducts.map((item, index) => (
                            <ProductComponent
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                     ))}
          </div>
      </div>
    </div>
  );
};

export default SingleCollection;
