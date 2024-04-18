import Header from "./components/Header.jsx";
import MainBody from "./components/MainBody.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
// import List from "./components/List.jsx";

import "./App.css";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Form />
      <MainBody />
      {/* <List /> */}
      <Footer />
    </div>
  );
}

export default App;
