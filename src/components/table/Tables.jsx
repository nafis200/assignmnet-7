import Table from "./Table";
import TableWant from "./TableWant";

const Tables = ({count,ok,CurrentCook,food,cnt,times,cal}) => {
  return (
    <div className=" lg:mt-10 ml-3 mt-12  lg:ml-0">
      <h1 className="font-bold text-center">Want to cook: {count}</h1>
      <hr className="mt-4 w-[400px]" />
      <section className="">
        <div class="overflow-x-auto lg:overflow-hidden ">
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
                ok.map(data=> <TableWant data = {data} CurrentCook={CurrentCook}></TableWant> )
             }
            </tbody>
          </table>
        </div>
      </section>
      <Table ok={ok} food={food} cnt={cnt} times={times} cal={cal}></Table>
    </div>
  );
};

export default Tables;

