import React from 'react';
import Footer from './Footer';
import Navbar from './HomeNav';

const Layout = ({children}:{children: React.ReactNode}) => {

  return (
    <div className='dark:bg-[#111827] dark:text-bodydark'>
        <div className='relative'>
         <Navbar />
          <main className='overflow-y-auto overflow-x-hidden'>
            <div className='mx-auto lg:max-w-screen-2xl 2xl:max-w-full'>
              {children}
            </div>
          </main>
          <Footer />
      </div>
    </div>
  );
};

export default Layout;