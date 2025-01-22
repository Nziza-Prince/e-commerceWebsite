import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductComponent from "./ProductComponent";
import { useState } from "react";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
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
    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);
    return (
        <div
        ref={potionRef}
         className={`transition-opacity duration-1000 ${
          isPotionVisible ? "opacity-100" : "opacity-0"
        }`}>
            {/* Latest Collections */}
            <section>
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className="text-center text-gray-500 mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
 
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {latestProducts.map((item, index) => (
                            <ProductComponent
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
            </section>
        </div>
    );
};

export default LatestCollection;
