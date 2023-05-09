import Link from "next/link";
import SystemInfo from "../../components/systeminfo";
import TableData from "../../components/tabledata";
import MainHeader from "../../components/mainheader";
import SidebarNav from "../../components/sidebar";
export default function Dashboard() {
  return (

    <div className="flex h-full">
      <div className="sidebar flex h-screen sticky top-0">
        <SidebarNav />
      </div>
      <div className="main flex flex-1 flex-col">
        <MainHeader />
        <div className="content flex p-4 gap-2 mt-6">
        <TableData />
          <div className="shadow-md border-0 h-[calc(100vh-150px)] overflow-y-auto w-2/5 border-red-400">
            <SystemInfo />
          </div>
        </div>
      </div>
    </div>


  );
}
