import Link from "next/link";
import SystemInfo from "../../components/systeminfo";
import TableData from "../../components/tabledata";
import { DataProvider } from "../../components/DataContext";
export default function Dashboard() {
  return (

    <div className="content flex p-6 gap-4 ">
    <DataProvider>
      <TableData />
      <div className=" border rounded-md h-[calc(100vh-150px)] w-2/5 border-gray-200">
        <SystemInfo />
      </div>
    </DataProvider>
  </div>


  );
}
