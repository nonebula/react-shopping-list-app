import shoppingList from "../data/data";
import List from "./List";

const MainBody = () => {
  return (
    <ul>
      {shoppingList.map((item) => (
        <List item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default MainBody;
