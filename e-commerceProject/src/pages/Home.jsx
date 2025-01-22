import Hero from "../assets/frontend_assets/hero_img.png";
import Exchange from "../assets/frontend_assets/exchange_icon.png";
import Quality from "../assets/frontend_assets/quality_icon.png";
import Support from "../assets/frontend_assets/support_img.png";
import SubscribePortion from "../components/SubscribePortion";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="mx-8 mt-20 md:mx-16 lg:mx-32 h-auto md:h-[600px] flex flex-col md:flex-row border font-outfit">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:pl-20 bg-white text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm font-light tracking-widest text-gray-600">
              OUR BESTSELLER
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] text-gray-900 my-4">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <p className="text-sm tracking-widest text-gray-700">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-pink-200 flex justify-center items-center">
          <img
            src={Hero}
            alt="Hero Image"
            className="h-[300px] md:h-[600px] w-full object-cover"
          />
        </div>
      </div>

      {/* Latest Collections and Best Sellers */}
      <div
     
        className={`mt-32 text-center lg:mx-48 md:mx-32 sm:mx-20`}
      >
        <LatestCollection />
        <BestSeller />
      </div>

      {/* Potion Section */}

      {/* Features Section */}
      <div className={`flex flex-col lg:flex-row lg:mx-52 md:mx-40 gap-10 mt-52 mb-64 justify-between `}>
        <div className="flex flex-col items-center justify-center text-center">
          <img className="h-10 w-10 mb-2" src={Exchange} alt="" />
          <p className="font-semibold mb-2 text-gray-900">
            Easy Exchange Policy
          </p>
          <p className="font-normal">We offer hassle-free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img className="h-10 w-10 mb-2" src={Quality} alt="" />
          <p className="font-semibold mb-2 text-gray-900">
            High Quality Products
          </p>
          <p className="font-normal">Only the best for our customers</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img className="h-10 w-10 mb-2" src={Support} alt="" />
          <p className="font-semibold mb-2 text-gray-900">24/7 Support</p>
          <p className="font-normal">We’re here whenever you need us</p>
        </div>
      </div>

      {/* Subscription Section */}
      <SubscribePortion />
    </div>
  );
};

export default Home;
