import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";
import Content from "./Content/Content";
import OtherProduct from "./otherProducts/otherPoducts";
// import Utility from "./Utility/Utility";
import Api from "./Utility/Utility";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Api />
      <OtherProduct />
      <Footer />
    </div>
  );
}

export default App;
