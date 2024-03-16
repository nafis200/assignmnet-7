const Banner = () => {
  return (
    <div>
      <main className="container mx-auto">
        <div className="lg:bg-[url('https://i.ibb.co/VqcjXd9/depositphotos-42930411-stock-photo-concentrated-male-chef-garnishing-food.jpg')] bg-[url('https://i.ibb.co/ySRV2wm/depositphotos-42930411-stock-photo-concentrated-male-chef-garnishing-food-2.jpg')] bg-no-repeat h-96 lg:h-[400px] w-6/7 lg:w-full lg:ml-20  lg:w-full mt-6 ml-2 mr-2 lg:ml-[220px]">
          <p className="text-xl lg:text-3xl pt-6 text-red-500  font-bold lg:ml-28 lg:pt-40 ">
            Discover an exceptional cooking class tailored for you!
          </p>
          <p className="lg:pt-5 pt-3 text-blue-700 lg:pl-40 font-extrabold">
            participate cooking programme and get lots of attractive price so
            hurry join
          </p>
          <div className="lg:ml-[300px] ml-5">
            <button className="btn btn-success lg:w-[200px] w-[150px] rounded-3xl mr-6 mt-4 text-white">
              Explore Now
            </button>
            <button className="btn  btn-outline btn-primary lg:w-[200px] w-[150px] rounded-3xl mt-4 text-white">
              Our Feedback
            </button>
          </div>
        </div>
      </main>

      <section>
        <div className="text-center lg:mt-10">
          <h1 className="text-4xl font-extrabold">Our Recipes</h1>
          <p className="font-extralight mt-6">
            You get here healthy food which we make very carefully.you also get
            food cheapest price.and get delicious food
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
