import PropTypes from "prop-types";

const List = ({ item, handleDeleteItem, handleDoneItem }) => {
  const { product, quantity } = item;

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

List.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleDoneItem: PropTypes.func.isRequired,
};

export default List;
