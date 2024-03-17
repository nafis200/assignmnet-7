import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Card = ({ blog,handleWant}) => {
  const {
    recipe_id,
    Recipe_image,
    Recipe_name,
    Short_description,
    Ingredients,
    Preparing_time,
    Calories
  } = blog;

  const item = [...Ingredients];
  return (
    <div>
      <section className="mt-5">
        <div class="card lg:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Recipe_image} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title font-bold">{Recipe_name}</h2>
            <p className="font-light">{Short_description}</p>
            {}
            <hr />
            <h1 className="font-semibold">Ingrediants:{Ingredients.length}</h1>
            <ul className="list-none">
              {item.map((fruit) => (
                <li>{fruit}</li>
              ))}
            </ul>
            <hr />
            <div>
              <span className="">
                <IoTimeOutline className="inline"></IoTimeOutline>{" "}
                <span>{Preparing_time}</span>{" "}
              </span>
              <span></span>
              <span className="lg:ml-2">
                {" "}
                <FaFireAlt className="inline"></FaFireAlt>{" "}
                <span>{Calories}</span>{" "}
              </span>
            </div>
            <button onClick={()=>handleWant(recipe_id, Recipe_name,Preparing_time,Calories)} className="btn lg:w-[150px] w-[100px] bg-green-400 rounded-2xl lg:mt-4 mt-2">
              want to Cook <ToastContainer></ToastContainer>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;