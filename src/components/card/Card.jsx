import { useState } from "react";


const Card = ({blog}) => {
    const {recipe_id,Recipe_image,Recipe_name,Short_description,Ingredients,Preparing_time,Calories} = blog

    const item = [...Ingredients]
    return (
        <div>
             
            <section className="mt-5">
            <div class="card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={Recipe_image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold">{Recipe_name}</h2>
    <p className="font-light">{Short_description}</p>
    {

    }
    <hr />
    <h1 className="font-semibold">Ingrediants:{Ingredients.length}</h1>
    <ul className="list-none">
    {
        item.map(fruit => <li>{fruit}</li> )
    }
    </ul>
    <div>

    </div>
    <hr />
  </div>
</div>
    </section>

        </div>
    );
};

export default Card;

