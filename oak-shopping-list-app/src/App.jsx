import Header from "./components/Header.jsx";
import MainBody from "./components/MainBody.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDoneItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainBody
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
