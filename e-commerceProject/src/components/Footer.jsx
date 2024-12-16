

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
<footer className="bg-gray-50 p-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Section */}
    <div className="text-left">
      <h2 className="font-bold text-2xl mb-3">PRINCE<span className="text-pink-600">.</span></h2>
      <p className="text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    {/* Middle Section */}
    <div className="text-left ml-40">
      <h3 className="font-bold mb-4">COMPANY</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About us</a></li>
        <li><a href="#" className="hover:underline">Delivery</a></li>
        <li><a href="#" className="hover:underline">Privacy policy</a></li>
      </ul>
    </div>
    {/* Right Section */}
    <div className="text-left ml-20">
      <h3 className="font-bold mb-4">GET IN TOUCH</h3>
      <ul className="space-y-2 text-gray-600">
        <li>+1-212-456-7890</li>
        <li><a href="mailto:greatstackdev@gmail.com" className="hover:underline">greatstackdev@gmail.com</a></li>
      </ul>
    </div>
  </div>
  <hr className="my-8 border-t border-gray-200" />
  <p className="text-gray-400 text-center text-sm">
    Copyright 2024 © Nziza-Prince - All Right Reserved.
  </p>
</footer>

    </div>
  )
}

export default Footer
