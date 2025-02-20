const CommonTable = ({ headers }) => {
  return (
    <table className="w-full my-10 ">
        <thead className="uppercase text-left text-sm bg-purple-700 rounded-md text-white">
            <tr>
                {
                    headers.map((item,index) => (
                        <th key={index} className="px-6 py-3">
                            {item}
                        </th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">Binary Labs</td>
                <td className="px-6 py-3">binarylabs@gmail.com</td>
                <td className="px-6 py-3">Baneshwor</td>
            </tr>
        </tbody>
    </table>
  )
}

export default CommonTable
