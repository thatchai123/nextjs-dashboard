'use client'
import SideNav from '../ui/dashboard/sidenav';
import { useSession } from 'next-auth/react';
export default function Layout({ children }: { children: React.ReactNode }) {
  const {data:session} = useSession()
  console.log(session)
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}