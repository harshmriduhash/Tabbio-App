import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const DefaultLayout = ({children}:{children: React.ReactNode}) => {
  const { user, isLoggedIn} = useApp();
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!user && isLoggedIn) {
      navigate("/")
    }
  }, [user, isLoggedIn])

  return (
    <div className='dark:bg-boxdark-2 bg-[#F2F4F6] dark:text-bodydark'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className='mx-auto'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout;
