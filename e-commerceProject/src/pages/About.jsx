import AboutImage from '../assets/frontend_assets/about_img.png';
import SubscribePortion from '../components/SubscribePortion';

const About = () => {
  return (
    <div>
      {/* ABOUT US Heading */}
      <h1 className="mt-16 mb-12 text-2xl text-center">ABOUT US</h1>

      {/* Main Section */}
      <div className="mx-8 lg:mx-48 flex flex-wrap lg:flex-nowrap gap-5 mb-20">
        {/* Left Section for Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={AboutImage}
            alt="Hero Image"
            className="h-[300px] rounded-lg md:h-[400px] lg:h-[600px] w-full object-cover"
          />
        </div>

        {/* Right Section for Text */}
        <div className="w-full lg:w-2/5 flex mt-10 lg:mt-20 flex-col gap-6 px-4">
          <p className="text-gray-500">
            PRICOM was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className="text-gray-500">
            Since our inception, we have worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <h1 className="font-semibold text-gray-900">Our Mission</h1>
          <p className="text-gray-500">
            Our mission at PRICOM is to empower customers with choice, convenience, and confidence. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Heading */}
      <h1 className="mt-48 mb-5 text-left ml-8 lg:ml-64 text-2xl">
        WHY <span>CHOOSE US</span>
      </h1>

      {/* Boxes Section */}
      <div className="flex flex-wrap lg:flex-nowrap  mx-8 lg:mx-64 mb-48">
        {/* Box 1 */}
        <div className="border p-10 md:p-14 lg:p-20 flex flex-col gap-1 text-gray-500 w-full lg:w-1/3">
          <h1 className="font-semibold mb-4 text-gray-900 text-center lg:text-left">
            QUALITY ASSURANCE
          </h1>
          <p className="text-center lg:text-left">We meticulously select and</p>
          <p className="text-center lg:text-left">Each product to ensure it meets</p>
          <p className="text-center lg:text-left">Our stringent quality standards.</p>
        </div>

        {/* Box 2 */}
        <div className="border p-10 md:p-14 lg:p-20 flex flex-col gap-1 text-gray-500 w-full lg:w-1/3">
          <h1 className="font-semibold mb-4 text-gray-900 text-center lg:text-left">
            CONVENIENCE
          </h1>
          <p className="text-center lg:text-left">With our user-friendly interface</p>
          <p className="text-center lg:text-left">And hassle-free ordering process,</p>
          <p className="text-center lg:text-left">Shopping has never been easier.</p>
        </div>

        {/* Box 3 */}
        <div className="border p-10 md:p-14 lg:p-20 flex flex-col gap-1 text-gray-500 w-full lg:w-1/3">
          <h1 className="font-semibold mb-4 text-gray-900 text-center lg:text-left">
            EXCEPTIONAL CUSTOMER SERVICE
          </h1>
          <p className="text-center lg:text-left">Our team of dedicated professionals</p>
          <p className="text-center lg:text-left">Is here to assist you every step</p>
          <p className="text-center lg:text-left">Ensuring your satisfaction.</p>
        </div>
      </div>
      <SubscribePortion/>
    </div>
  );
};

export default About;
