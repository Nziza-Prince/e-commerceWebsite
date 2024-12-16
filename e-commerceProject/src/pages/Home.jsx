import Hero from '../assets/frontend_assets/hero_img.png';
import Man from '../assets/frontend_assets/p_img2_1.png'
import Person1 from '../assets/frontend_assets/p_img2.png'
import Person2 from '../assets/frontend_assets/p_img3.png'
import Person3 from '../assets/frontend_assets/p_img5.png'
import Person4 from '../assets/frontend_assets/p_img6.png'
import Person5 from '../assets/frontend_assets/p_img7.png'
import Person6 from '../assets/frontend_assets/p_img8.png'
import Person7 from '../assets/frontend_assets/p_img9.png'
import Person8 from '../assets/frontend_assets/p_img10.png'
import Person10 from '../assets/frontend_assets/p_img12.png'
import Exchange from '../assets/frontend_assets/exchange_icon.png'
import Quality from '../assets/frontend_assets/quality_icon.png'
import Support from '../assets/frontend_assets/support_img.png'

const Home = () => {
  const products = [
    { id: 1, name: "Women Round Neck Cotton Top", price: "$149", img: Man },
    { id: 2, name: "Women Round Neck Cotton Top", price: "$149", img: Person1 },
    { id: 3, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person2 },
    { id: 4, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person3 },
    { id: 5, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person4 },
    { id: 6, name: "Men Printed Plain Cotton Shirt", price: "$149", img: Person5 },
    { id: 7, name: "Women Round Neck Cotton Top", price: "$149", img: Person6},
    { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person7 },
    { id: 9, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person8 },
    { id: 10, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person10 },
  ];
  return (
    <div>
      <div className="mx-20 h-[500px] flex border">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center pl-20 bg-white">
          <p className="text-sm font-light tracking-widest text-gray-600">
           OUR BESTSELLERS--
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
    <div className='flex mx-52 mt-52 mb-64 justify-between'>
<div className="flex flex-col items-center justify-center text-center">
  <img className="h-10 w-10 mb-2" src={Exchange} alt="" />
  <p className="font-semibold mb-2 text-gray-900">Easy Exchange Policy</p>
  <p className="font-normal">We offer hassle-free exchange policy</p>
</div>

<div className="flex flex-col items-center justify-center text-center">
  <img className="h-10 w-10 mb-2" src={Quality} alt="" />
  <p className="font-semibold mb-2 text-gray-900">Easy Exchange Policy</p>
  <p className="font-normal">We offer hassle-free exchange policy</p>
</div>
<div className="flex flex-col items-center justify-center text-center">
  <img className="h-10 w-10 mb-2" src={Support} alt="" />
  <p className="font-semibold mb-2 text-gray-900">Easy Exchange Policy</p>
  <p className="font-normal">We offer hassle-free exchange policy</p>
</div>
    </div>
    <div className="flex flex-col justify-center items-center mb-20 mx-20 text-center">
  <h1 className="font-bold text-3xl mb-5 font-[Roboto]">
    Subscribe now & get 20% off
  </h1>
  <p className="text-sm text-gray-400 mb-7">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
  </p>
  <div className="flex items-center">
    <input
      type="text"
      placeholder="Enter your email id"
      className="border border-gray-300 px-4 py-3 w-[470px] focus:outline-none focus:ring-gray-400"
    />
    <button className="bg-black text-white px-5 py-[13px] hover:bg-gray-800 transition">
      SUBSCRIBE
    </button>
  </div>
</div>
    </div>
  );
};

export default Home;
