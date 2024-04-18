/* eslint-disable react/prop-types */
const List = ({ item, handleDeleteItem, handleDoneItem }) => {
  // eslint-disable-next-line no-unused-vars
  const { product, quantity, packed } = item;

  return (
    <li>
      <span>{quantity}</span>
      <p>{product}</p>
      <div>
        {" "}
        <button
          onClick={() => handleDoneItem(item.id)}
          className="bg-white border-4 m-4 border-green-600"
        >
          Done
        </button>
        <button
          onClick={() => handleDeleteItem(item.id)}
          className="bg-white border-4 m-4 border-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
