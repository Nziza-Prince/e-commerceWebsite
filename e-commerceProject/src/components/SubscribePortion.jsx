const SubscribePortion = () => {
  return (
    <div>
 <div className="flex flex-col justify-center items-center mb-64 mx-20 text-center">
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
  )
}

export default SubscribePortion
