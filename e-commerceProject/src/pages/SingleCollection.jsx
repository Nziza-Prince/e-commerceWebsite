import Man2 from '../assets/frontend_assets/p_img12.png';
import Man52 from '../assets/frontend_assets/p_img52.png';
import Man51 from '../assets/frontend_assets/p_img51.png';
import Man50 from '../assets/frontend_assets/p_img50.png';
import Man40 from '../assets/frontend_assets/p_img40.png'
import Orange from '../assets/frontend_assets/star_icon.png'
import dullStar from '../assets/frontend_assets/star_dull_icon.png'
import { useState } from 'react';

const SingleCollection = () => {
  const products = [Man2,Man40,Man50,Man51,Man52]
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const [mainImage,setMainImage] = useState(Man2)
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update the selected size
  };
  const handleThumbnailClick = (image)=>{
    setMainImage(image)
  }

  return (
    <div className="container mx-56 p-6 border-t font-outfit">
      <div className="flex mr-32 mt-5">
        {/* Product Images Section */} 
        <div className="w-1/2">
          <div className="flex gap-3">
            {/* Main Product Image */}
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              <img onClick={()=>handleThumbnailClick(Man2)} src={Man2} alt="Thumbnail 1"   className="rounded-md hover:scale-105 transition-transform duration-200 h-[131px]  w-30 object-cover cursor-pointer" />
              <img onClick={()=>handleThumbnailClick(Man52)} src={Man52} alt="Thumbnail 2" className="rounded-md hover:scale-105 transition-transform duration-200 h-[131px] w-30 object-cover cursor-pointer" />
              <img onClick={()=>handleThumbnailClick(Man51)} src={Man51} alt="Thumbnail 3" className="rounded-md hover:scale-105 transition-transform duration-200 h-[131px] w-30 object-cover cursor-pointer" />
              <img onClick={()=>handleThumbnailClick(Man50)} src={Man50} alt="Thumbnail 4" className="rounded-md hover:scale-105 transition-transform duration-200 h-[131px] w-30 object-cover cursor-pointer" />
            </div>
            <img src={mainImage} alt="Men Round Neck Pure Cotton T-shirt" className="h-[550px] w-[500px] object-cover mb-4" />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-2">Men Round Neck Pure Cotton T-shirt</h1>
          <div className="flex items-center mb-4">
            <div className='flex gap-2'>
           <img className='w-3' src={Orange} alt="" />
           <img className='w-3' src={Orange} alt="" />
           <img className='w-3' src={Orange} alt="" />
           <img className='w-3' src={Orange} alt="" />
           <img className="w-3" src={dullStar} alt="" />

            </div>
            <span className="ml-3 text-sm text-gray-600">(122)</span>
          </div>
          <p className="text-xl font-semibold text-gray-900 mb-4">$149</p>
          <p className='text-gray-600 text-sm mt-5 mb-8'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Size</label>
            <div className="flex gap-4">
      {["S", "M", "L", "XL"].map((size) => (
        <div
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`bg-gray-200 hover:cursor-pointer hover:bg-gray-100 py-2 px-5 text-center ${
            selectedSize === size ? "border border-orange-500" : "border border-transparent"
          }`}
        >
          {size}
        </div>
      ))}
    </div>
  </div>
<button className="bg-black text-white py-3 px-10 mt-10 mb-10">ADD TO CART</button>
<hr />
<div className=" flex flex-col text-left mt-6 text-gray-700 gap-3">
            <p>100% Organic product.</p> 
            
        <p>Can deliver in a week.</p> 
            
           <p>Easy return and exchange policy within 7 days</p> .
          </div>
        </div>
      </div>
     
     
      <div className='mt-32 mb-56 mr-32'>
        <div className='flex'>
          <div className='border px-6 py-4'>
            <p className='font-semibold'>Description</p>
          </div>
          <div className='border px-6 py-4'>
            <p className='text-gray-600 font-semibold'>Reviews(122)</p>
          </div>
        </div>
        <div className='flex flex-col border p-10 mx-46 gap-7 text-gray-600'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
         <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>
      
      <div className='flex flex-col text-center  mt-20 mr-48 ml-20 mb-20'>
        <h1 className='text-gray-400 text-3xl font-semibold mb-10'>RELATED <span className='text-gray-800'>PRODUCTS---</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 rounded-sm text-left ml-2">
        
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={product}
                alt={`Product ${index + 1}`}
                className="h-full w-full object-cover"
              />
            <div className='mt-5 gap-2 flex flex-col'>
              <p>Women Round Neck Cotton</p>
              <p>$149</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}

export default SingleCollection;