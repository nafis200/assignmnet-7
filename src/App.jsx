import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/card/Cards";
import Tables from "./components/table/Tables";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
   const [count, setCount] = useState(0)
   const [mark, setMark] = useState([])
   const [ok,setOk] = useState([])
  
   const handleWant = (id, Recipe_name,Preparing_time,Calories)=>{
        if(mark.includes(id)){  
            toast('Already exists')  
           }
        else{
          setMark([...mark,id])
          setCount(count + 1);
          const newOk = [count,Recipe_name,Preparing_time,Calories,"preparing"]
          setOk([...ok,newOk])
        }
   }

   const CurrentCook = (id,name,time,calories)=>{
          console.log(id,name,time,calories);
   }
  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex">
        <Cards handleWant={handleWant} ></Cards>
        <Tables count={count} CurrentCook={CurrentCook} ok={ok}></Tables>
      </div>
    </>
  );
}

export default App;
