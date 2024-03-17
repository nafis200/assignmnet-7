
const Tables = ({count}) => {
  return (
    <div className="w-1/3 lg:mt-10 mt-12 ml-3 lg:ml-0">
      <h1 className="font-bold text-center">Want to cook: {count}</h1>
      <hr className="mt-4 w-[400px]" />
      <section className="">
        <div class="overflow-x-auto lg:mr-20">
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                  Quality <br /> Specialist
                </td>
                <td>Blue</td>
                <button className="btn mt-2 bg-green-400 ">Preparing</button>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-5">
        <h1 className="font-bold text-center">Current cooking</h1>
        <hr className="mt-5 w-[400px]" />
        <div class="overflow-x-auto lg:mr-20">
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                  Quality <br /> Specialist
                </td>
                <td>Blue</td>
              </tr>
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

export default Tables;

