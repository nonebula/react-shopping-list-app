import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <select
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
        type="text"
        placeholder="Enter an Item"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
