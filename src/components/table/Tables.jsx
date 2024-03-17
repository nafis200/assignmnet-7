import Table from "./Table";
import TableWant from "./TableWant";

const Tables = ({count,ok,toggle}) => {
  return (
    <div className="w-1/3 lg:mt-10 mt-12 ml-3 lg:ml-0">
      <h1 className="font-bold text-center">Want to cook: {count}</h1>
      <hr className="mt-4 w-[400px]" />
      <section className="">
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
              <TableWant toggle={toggle}></TableWant>
            </tbody>
          </table>
        </div>
      </section>
      <Table ok={ok}></Table>
    </div>
  );
};

export default Tables;

