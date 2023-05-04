import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";
import Content from "./Content/Content";
import OtherProduct from "./otherProducts/otherPoducts";
// import Utility from "./Utility/Utility";
// import Api from "./Utility/Utility";
import CopyRight from "./Copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      {/* <Api /> */}
      <OtherProduct />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
