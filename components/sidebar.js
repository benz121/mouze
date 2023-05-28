"use client";
import Image from "next/image";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { usePathname } from 'next/navigation';

export default function SidebarNav() {
    const pathname = usePathname();

// console.log(pathname);
    const menuItems = [
        { name: 'Dashboard', icon: <DashboardIcon />, link:"/dashboard" },
        { name: 'Upload', icon: <CloudUploadIcon />, link:"/dashboard/upload" },
        { name: 'Timeline', icon: <TimelineIcon />, link:"/dashboard/timeline" },
        { name: 'Reports', icon: <AssessmentIcon />, link:"/dashboard/reports" },
        { name: 'Settings', icon: <SettingsIcon />, link:"/dashboard/settings" },
    ];

    return (
        <div className="flex flex-col h-screen w-[88px] justify-between border-e bg-white">
            <div>
                {/* logo */}
                <div className="inline-flex h-16 w-16 p-1 mx-1 items-center justify-center">
                    <a className="pointer-events-none flex place-items-center lg:pointer-events-auto lg:p-0"
                        href="/dashboard"
                        // target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={64}
                            height={24}
                            priority
                        />
                    </a>
                </div>

                <div className=" border-gray-100 items-center justify-center">
                    <nav aria-label="Main Nav" className="flex flex-col p-2">
                        {/* <div className="py-4">
                            <a href="/dashboard/upload"
                                className="group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700">
                                <CloudUploadIcon />
                                <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                                    Upload
                                </span>
                            </a>
                        </div> */}

                        <ul className="space-y-1 border-t border-gray-100 pt-4 items-stretch">
                            {menuItems.map((item,index) => (
                                <li key={index} className="rounded hover:bg-gray-100 ">
                                    <a href={item.link} className={`group flex flex-col items-center justify-center rounded px-2 py-1.5
                                    ${pathname === item.link ? 'text-blue-600 hover:hover:text-blue-600' : ' text-gray-500 hover:text-blue-600 '}`}>
                                        {item.icon}
                                        <span className="text-xs font-medium py-1.5 px-2 group-hover:text-blue-500">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <form action="/logout">
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
                        <ExitToAppIcon />
                        <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}
