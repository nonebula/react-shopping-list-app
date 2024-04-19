import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ handleAddItems }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      handleAddItems(newTodo);
      setProduct("");
      setQuantity(1);
    }
  };
  return (
    <div className="container">
      <form
        className="w-screen flex justify-evenly p-20 text-black"
        onSubmit={handleSubmit}
      >
        <select
          className="ring ring-yellow-300 text-black p-4 h-8"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        >
          {[...Array(20)].map((_, index) => (
            <option value={index + 1} key={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <input
          className="w-1/2 h-12 border-4 p-4 border-yellow-300"
          type="text"
          placeholder="Enter an Item"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
        <button className="btn ring ring-yellow-300 bg-white rounded-lg w-20 font-bold  text-black">
          Add
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleAddItems: PropTypes.func.isRequired,
};

export default Form;
