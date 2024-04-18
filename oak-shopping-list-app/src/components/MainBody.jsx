import List from "./List";
import Form from "./Form";

const MainBody = ({ items, handleAddItems, handleDeleteItem }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul>
        {items.map((item) => (
          <List item={item} key={item.id} handleDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default MainBody;
