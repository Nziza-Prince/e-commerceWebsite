import Man from '../assets/frontend_assets/p_img25.png';

const MyOrders = () => {
  return (
    <div className='font-outfit mx-4 md:mx-10 lg:mx-48 text-gray-700'>
      <h1 className='text-gray-400 text-2xl border-b pb-10 mt-10'>
        MY <span className='text-black'>ORDERS</span>
      </h1>
      <div className='flex justify-between border-b'>
        <div className='flex gap-4 mt-4 pb-4'>
          <img src={Man} className='w-20' alt="" />
          <div className='flex flex-col gap-3'>
            <p>Men Round Neck Pure Cotton T-shirt</p>
            <div className='flex gap-3'>
              <p>$149</p>
              <p>Quantity: 1</p>
              <p>Size: L</p>
            </div>
            <p className='text-left'>Date: <span className='text-gray-500'>25, May, 2024</span></p>
          </div>
        </div>

        {/* Added Green Dot before "Ready to ship" text */}
        <div className="flex items-center justify-center mt-4 md:mt-0">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
          <p className='text-center'>Ready to ship</p>
        </div>

        <button className='h-10 mt-4 md:mt-12 px-5 border py-2'>Track Order</button>
      </div>

      <div className='flex justify-between border-b mb-4'>
        <div className='flex gap-4 mt-4 pb-4'>
          <img src={Man} className='w-20' alt="" />
          <div className='flex flex-col gap-3'>
            <p>Men Round Neck Pure Cotton T-shirt</p>
            <div className='flex gap-3'>
              <p>$149</p>
              <p>Quantity: 1</p>
              <p>Size: L</p>
            </div>
            <p className='text-left'>Date: <span className='text-gray-500'>25, May, 2024</span></p>
          </div>
        </div>

        {/* Added Green Dot before "Ready to ship" text */}
        <div className="flex items-center justify-center mt-4 md:mt-0">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
          <p className='text-center'>Ready to ship</p>
        </div>

        <button className='h-10 mt-4 md:mt-12 px-5 border py-2'>Track Order</button>
      </div>
    </div>
  );
};

export default MyOrders;
