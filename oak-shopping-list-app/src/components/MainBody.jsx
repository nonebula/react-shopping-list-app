/* eslint-disable react/prop-types */
import List from "./List";
import Form from "./Form";
import { useState } from "react";

const MainBody = ({
  items,
  handleAddItems,
  handleDeleteItem,
  handleDoneItem,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
};

export default MainBody;
