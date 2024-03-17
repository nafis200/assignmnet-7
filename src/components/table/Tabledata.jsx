

const Tabledata = ({data}) => {
    return (
        <div className=" bg-gray-400 lg:p-2 p-2 mt-4">
            <tr>
                <th>{data[0] + 1}</th>
                <td>{data[1]}</td>
                <td>
                  {data[2]}
                </td>
                <td>{data[3]}</td>
              </tr>
        </div>
    );
};

export default Tabledata;

