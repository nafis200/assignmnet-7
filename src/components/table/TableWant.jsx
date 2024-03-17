
const TableWant = ({data,CurrentCook}) => {
   
    return (
        <div>
            <tr>
                <td>{data[0] + 1}</td>
                <td>{data[1]}</td>
                <td>
                 {data[2]}
                </td>
                <td>{data[3]}</td>
                <button onClick={()=>CurrentCook(data[0],data[1],data[2],data[3])} className="btn mt-2 bg-green-400 ml-5 ">{data[4]}</button>
              </tr>
        </div>
    );
};

export default TableWant;