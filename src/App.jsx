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

   const [food, setFood] = useState([])

  const [cnt,setCnt] = useState(0)

  const[times,setTimes] = useState(0)

  const [cal, setCal] = useState(0)
  
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

          const newOk1 = [id,name,time,calories]
          setFood([...food,newOk1])
          setCnt(cnt + 1)
          setCount(count - 1)
          setTimes(times + time)
          setCal(cal + calories)
          // const ages = ok.filter(x =>{
          //      if(x[0] !== id){
          //        return x
          //      }
          // })
          // console.log(ages);
          
   }

  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex">
        <Cards handleWant={handleWant} ></Cards>
        <Tables count={count} CurrentCook={CurrentCook} ok={ok} food={food} cnt = {cnt} cal={cal} times={times}></Tables>
      </div>
    </>
  );
}

export default App;