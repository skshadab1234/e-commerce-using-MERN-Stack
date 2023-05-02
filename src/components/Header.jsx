import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({count}) => {
  return (
    <div className="relative  flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
      <img src="./logo-dark.png" className='w-[200px] h-auto' />
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
              <Link to="/">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Home</a></li>
              </Link>

              <Link to="/shop">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Shop</a></li>
              </Link>

              <Link to="/cart">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Cart</a></li>
              </Link>

              <Link to="/checkout">
                <li><a className="hover:text-sky-500 dark:hover:text-sky-400">Checkout</a></li>
              </Link>
            </ul>
          </nav>
          <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
            <a href="" className="ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <img src='./login.png' className='w-7' />
            </a>
            <a href="" className="relative ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
              <img src='./cart.png' className='w-7 h-6' />
              <p className='flex justify-center absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5  h-5 text-[12px] items-center animate-bounce'>{count}</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header