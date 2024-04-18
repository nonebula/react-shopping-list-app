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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainBody
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
      />
      <Footer />
    </div>
  );
}

export default App;
