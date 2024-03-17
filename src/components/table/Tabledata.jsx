

const Tabledata = ({data}) => {
    return (
        <div>
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