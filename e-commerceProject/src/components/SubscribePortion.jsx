import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const SubscribePortion = () => {
  const handlSubscribe = ()=>{
    toast.info("Coming Soon",{autoClose:1200})
  }
      const [isPotionVisible, setPotionVisible] = useState(false);
      const potionRef = useRef(null);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            setPotionVisible(entry.isIntersecting);
          },
          { threshold: 0.2 }
        );
    
        if (potionRef.current) {
          observer.observe(potionRef.current);
        }
    
        return () => {
          if (potionRef.current) observer.unobserve(potionRef.current);
        };
      }, []);
  return (
    <div 
    ref={potionRef}
    className={`px-4 sm:px-8 lg:px-20 mb-16 lg:mb-32 transition-opacity duration-1000 ${
          isPotionVisible ? "opacity-100" : "opacity-0"
        }`}>
      <div className="flex flex-col justify-center items-center text-center">
        {/* Heading */}
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 font-[Roboto]">
          Subscribe now & get 20% off
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-3 sm:gap-0">
          <input
            type="text"
            placeholder="Enter your email id"
            className="border border-gray-300 px-4 py-2 w-full sm:w-3/4 focus:outline-none "
          />
          <button onClick={handlSubscribe} className="bg-black text-white px-6 py-2 w-full sm:w-1/4  hover:bg-gray-800 transition-all duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribePortion;
