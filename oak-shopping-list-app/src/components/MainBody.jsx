import List from "./List";
import Form from "./Form";
import { useState } from "react";

import PropTypes from "prop-types";

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
    <div className="container text-center min-h-96 w-screen">
      <Form handleAddItems={handleAddItems} />
      <ul className="flex flex-col items-center justify-center">
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
          className="text-center ring-2 rounded-lg"
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

MainBody.propTypes = {
  items: PropTypes.array.isRequired,
  handleAddItems: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleDoneItem: PropTypes.func.isRequired,
};

export default MainBody;
