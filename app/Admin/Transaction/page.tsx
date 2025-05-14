import Link from "next/link"

const TransactionReportPage = () => {
    return (
      <div className="min-h-screen p-8">
        {/* Transaction Report Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Transaction Report</h2>
          <Link href="/Admin/formulir-tmtra">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Add+</button>
          </Link>
        </div>
  
        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left">ID Transaction</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Amount</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Date</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">805123456789111</td>
                <td className="py-2 px-4">Rp 1.299.000</td>
                <td className="py-2 px-4">12 - 10 - 2024</td>
                <td className="py-2 px-4">
                <Link href="/Admin/formulir-edtra">
                  <button className="text-blue-500">Edit</button>
                </Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">805123456789112</td>
                <td className="py-2 px-4">Rp 4.999.999</td>
                <td className="py-2 px-4">11 - 10 - 2024</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">805123456789113</td>
                <td className="py-2 px-4">Rp 3.999.000</td>
                <td className="py-2 px-4">10 - 10 - 2024</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">805123456789114</td>
                <td className="py-2 px-4">Rp 15.999.000</td>
                <td className="py-2 px-4">10 - 10 - 2024</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">805123456789115</td>
                <td className="py-2 px-4">Rp 6.999.000</td>
                <td className="py-2 px-4">09 - 10 - 2024</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">805123456789116</td>
                <td className="py-2 px-4">Rp 20.999.000</td>
                <td className="py-2 px-4">08 - 10 - 2024</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default TransactionReportPage
  