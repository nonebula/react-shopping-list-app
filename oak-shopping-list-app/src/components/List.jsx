import PropTypes from "prop-types";

const List = ({ item, handleDeleteItem, handleDoneItem }) => {
  const { product, quantity } = item;

  return (
    <div className="container">
      <li
        className={`bg-slate-300 space-y-6 p-8 rounded-lg flex flex-col items-center overflow-hidden shadow-lg ${
          item.packed ? "line-through" : ""
        }`}
      >
        <p className="text-lg font-bold">{product}</p>
        <span className="text-lg">Amount needed: {quantity}</span>
        <div>
          {" "}
          <button
            onClick={() => handleDoneItem(item.id)}
            className="bg-white border-4 m-4 border-green-600 rounded-lg p-2 font-bold"
          >
            Done
          </button>
          <button
            onClick={() => handleDeleteItem(item.id)}
            className="bg-white border-4 m-4 border-red-600 rounded-lg p-2 font-bold"
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

List.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleDoneItem: PropTypes.func.isRequired,
};

export default List;
