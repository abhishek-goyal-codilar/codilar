import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getData } from "./gql/Query";
import Content from "./Content/Content";
import OtherProduct from "./otherProducts/otherPoducts";

function App() {
  const { loading, error, data } = useQuery(getData);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <OtherProduct />
      <Footer />
    </div>
  );
}

export default App;
