import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("TEST");
  const [quantity, setQuantity] = useState(5);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
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
