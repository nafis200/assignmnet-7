import Tabledata from "./Tabledata";

const Table = ({ok,food,cnt,times,cal}) => {
    return (
        <div>
            <section className="mt-5">
        <h1 className="font-bold text-center">Current:{cnt}</h1>
        <hr className="mt-5 w-[400px]" />
        <div class="overflow-x-auto lg:overflow-hidden lg:mr-20">
          <table class="table">
          <thead className="flex">
              <tr className="lg:ml-4">
               <th className=""></th>
              </tr>
              <tr>
                <th>Name</th>
              </tr>
              <tr className="lg:ml-10 ml-14" >
                <th className="">Time</th>
              </tr>
              <tr>
                <th>Calories</th>
              </tr>
              </thead>
            <tbody>
              {
                ok.map(data=> <Tabledata data={data} food = {food} times={times} ></Tabledata> )
              }
            </tbody>
          </table>
          <div className="flex gap-2 lg:gap-12 mt-3 lg:ml-32">
            <p className="font-bold">
              total time = <br /> <span>{times} minutes</span>
            </p>
            <p className="font-bold">
              Total calories = <br /> <span>{cal} calories</span>
            </p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Table;