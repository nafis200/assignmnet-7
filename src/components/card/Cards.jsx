import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleWant}) => {
  const [card, setCard] = useState([]);
  
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className=" w-1/2 lg:w-2/3 grid lg:grid-cols-2 lg:ml-20 mt-5 pt-5">
      {card.map((blog) => (
        <Card key={blog.id} handleWant={handleWant}  blog={blog}></Card>
      ))}
    </div>
  );
};

export default Cards;
