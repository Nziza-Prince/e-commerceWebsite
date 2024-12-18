import ContactImage from '../assets/frontend_assets/contact_img.png';
import SubscribePortion from '../components/SubscribePortion';

const Contact = () => {
  return (
    <div className='font-outfit'>
      {/* CONTACT US Heading */}
      <h1 className="mt-16 mb-12 text-3xl text-center font-bold lg:text-2xl">CONTACT US</h1>

      {/* Main Section */}
      <div className="mx-4 sm:mx-8 lg:mx-48 flex flex-wrap lg:flex-nowrap gap-8 mb-16 lg:mb-32">
        {/* Left Section for Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={ContactImage}
            alt="Hero Image"
            className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full object-cover rounded-lg"
          />
        </div>

        {/* Right Section for Text */}
        <div className="w-full lg:w-2/5 flex mt-10 lg:mt-20 flex-col gap-6 px-4">
          <h1 className='text-gray-600 text-2xl md:text-2xl font-semibold'>OUR STORE</h1>
          <div className='mb-5 text-base md:text-lg'>
            <p className='text-gray-500'>54709 Willms Station</p>
            <p className='text-gray-500'>Suite 350, Washington, USA</p>
          </div>

          <div className='mb-5 text-base md:text-lg'>
            <p className='text-gray-500'>Tel: (415) 555-0132</p>
            <p className='text-gray-500'>Email: nzizaprince7@gmail.com</p>
          </div>

          <h1 className='text-gray-600 text-2xl md:text-2xl font-semibold'>CAREERS AT PRINCE</h1>
          <p className='text-gray-500 text-base md:text-lg'>
            Learn more about our teams and job openings.
          </p>

          <button className='px-6 py-3 border border-black rounded-md text-black hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-48'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Subscribe Portion */}
      <SubscribePortion />
    </div>
  );
};

export default Contact;
