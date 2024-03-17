import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/card/Cards";
import Tables from "./components/table/Tables";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex">
        <Cards></Cards>
        <Tables></Tables>
      </div>
    </>
  );
}

export default App;
