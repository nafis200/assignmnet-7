import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/card/Cards";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <Cards></Cards>
      </div>
    </>
  );
}

export default App;
