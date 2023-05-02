import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ count }) => {
  const [adminData, setadminData] = useState([])
  useEffect(() => {
    const cookieData = Cookies.get('adminData');
    if (cookieData) {
      setadminData(JSON.parse(cookieData));
    }
  }, []);
  
  return (
    <div className="relative  flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <div className='relative top-2'>
        <p className='absolute top-2 left-28'> Admin</p>
        <img src="../logo-dark.png" className='w-[200px] h-auto' />
      </div>
      <div className="flex items-center">
        <button type="button" className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
          <span className="sr-only">Search</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
        </button>
        <div className="-my-1 ml-2 -mr-1 md:hidden">
          <button type="button" className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div>

          </div>
        </div>
        <div className="hidden md:flex items-center">
          <nav>
            <ul className="flex items-center gap-x-8">
              <Link to="/Admin/Dashboard">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Dashboard</a></li>
              </Link>

              <Link to="/Admin/Products">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Products</a></li>
              </Link>

              <Link to="/Admin/Orders">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Orders</a></li>
              </Link>

              <Link to="/Admin/Customers">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Customers</a></li>
              </Link>
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            {
              adminData.length > 0 ?
                <>
                  <p>{adminData[0].email}</p>
                  <a href="/Admin/Logout" className="ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    Logout</a>
                </> : 
                <Link to="/Admin/Login">
                  <a  className="ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <img src='../login.png' className='w-7' />
                  </a>
                </Link>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header