import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductComponent = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/collection/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 w-full transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium text-left pl-2">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductComponent.propTypes = {
  id: PropTypes.string.isRequired, // id should be a string
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // image is an array of strings
  name: PropTypes.string.isRequired, // name should be a string
  price: PropTypes.number.isRequired, // price should be a number
};
export default ProductComponent;
