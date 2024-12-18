import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductComponent from "./ProductComponent";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setbestSeller] = useState([]);

  useEffect(() => {
    const bestSellers = products.filter((item) => (item.bestseller));
    setbestSeller(bestSellers);
  },[products]);
  return (
    <div>
      {/* Best Seller */}
      <section className="mt-20">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="text-center text-gray-500 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {bestSeller.map((item, index) => (
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

export default BestSeller;
