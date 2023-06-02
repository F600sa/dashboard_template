import { Transactionss } from "src/core/statics/TransactionsData";

function Transactions() {
  return (
    <div className="bg-white rounded-lg shadow-md ">
      <div className="flex flex-col p-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <p className="text-xs text-gray-400">
          This is a list of latest transactions.
        </p>
      </div>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              TRANSACTION
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DATE
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden">
              AMOUNT
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden">
              STATUS
            </th>
            {/* Add more columns based on your data */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Transactionss.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="px-1 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.TRANSACTIONtitle}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.DATE}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap sm:hidden">
                <div className="text-sm text-gray-900">{item.amount}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap sm:hidden">
                <div className="text-sm text-gray-900">{item.STATUS}</div>
              </td>
              {/* Add more cells based on your data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
