import Tabledata from "./Tabledata";

const Table = ({ok}) => {
    return (
        <div>
            <section className="mt-5">
        <h1 className="font-bold text-center">Current cooking</h1>
        <hr className="mt-5 w-[400px]" />
        <div class="overflow-x-auto lg:overflow-hidden lg:mr-20">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {
                ok.map(data=> <Tabledata data={data}></Tabledata> )
              }
            </tbody>
          </table>
          <div className="flex gap-2 lg:gap-12 mt-3 lg:ml-32">
            <p className="font-bold">
              total time = <br /> <span>45 minutes</span>
            </p>
            <p className="font-bold">
              Total calories = <br /> <span>1000 calories</span>
            </p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Table;