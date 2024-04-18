const List = ({ item }) => {
  const { product, quantity, packed } = item;
  return (
    <li>
      <span>{quantity}</span>
      <p>{product}</p>
      <div>
        {" "}
        <button className="bg-white border-4 m-4 border-green-600">Done</button>
        <button className="bg-white border-4 m-4 border-red-600">Delete</button>
      </div>
    </li>
  );
};

export default List;
