import Hero from '../assets/frontend_assets/hero_img.png';
import Man from '../assets/frontend_assets/p_img2_1.png'
import Exchange from '../assets/frontend_assets/exchange_icon.png'
import Quality from '../assets/frontend_assets/quality_icon.png'
import Support from '../assets/frontend_assets/support_img.png'
const Home = () => {
  const products = [
    { id: 1, name: "Women Round Neck Cotton Top", price: "$149", img: Man },
    { id: 2, name: "Women Round Neck Cotton Top", price: "$149", img: Man },
    { id: 3, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
    { id: 4, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
    { id: 5, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
    { id: 6, name: "Men Printed Plain Cotton Shirt", price: "$149", img: Man },
    { id: 7, name: "Women Round Neck Cotton Top", price: "$149", img: Man },
    { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
    { id: 9, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
    { id: 10, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Man },
  ];
  return (
    <div>
      <div className="mx-20 h-[500px] flex border">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center pl-20 bg-white">
          <p className="text-sm font-light tracking-widest text-gray-600">
            --- OUR BESTSELLERS
          </p>
          <h1 className="text-5xl font-['Playfair_Display'] text-gray-900 my-4">
            Latest Arrivals
          </h1>
          <p className="text-sm tracking-widest text-gray-700">
            SHOP NOW ---
          </p>
        </div>
        {/* Right Section */}
        <div className="w-1/2 bg-pink-200 flex justify-center items-center">
          <img
            src={Hero}
            alt="Hero Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="my-16 font- [Roboto] mx-32">
      {/* Latest Collections */}
      <section>
        <h2 className="text-center text-2xl text-gray-700 font-semibold mb-2">
          LATEST <span className="font-bold text-gray-900">COLLECTIONS</span> ---
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="grid grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-1">
              <img
                src={product.img}
                alt={product.name}
                className="w-full object-cover mb-2"
              />
              <p className="text-sm text-gray-800">{product.name}</p>
              <p className="text-sm ">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Seller */}
      <section className="mt-16">
        <h2 className="text-center text-2xl text-gray-700 font-semibold mb-2">
          BEST <span className="font-bold text-gray-900">SELLER</span> ---
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="grid grid-cols-5 gap-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="flex flex-col">
              <img
                src={product.img}
                alt={product.name}
                className="w-full object-cover mb-2"
              />
              <p className="text-sm text-gray-800">{product.name}</p>
              <p className="text-sm font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <div className='flex mx-52 mt-52 mb-16 justify-between'>
      <div className='flex flex-col justify-center text-center'>
        <img className='w-10 ' src={Exchange} alt="" />
        <p>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={Quality} alt="" />
        <p>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={Support} alt="" />
        <p>Best Customer Support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
