import '../globals.css'
import { Inter } from 'next/font/google'

import MainHeader from "../../components/mainheader";
import SidebarNav from "../../components/sidebar";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'DFIR Home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <div className="sidebar flex h-screen sticky top-0">
            <SidebarNav />
          </div>
          <div className="main flex flex-1 flex-col">
            <MainHeader />
            {children}
          </div>
        </div >

      </body>
    </html>
  )
}
