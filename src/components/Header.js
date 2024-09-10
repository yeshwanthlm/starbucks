import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from "../assests/img/logo.png"
import { RiUserLine } from "react-icons/ri"
import { BsSearch, BsShop } from "react-icons/bs"
import welcomeImage from "../assests/img/Welcome_Website.jpg"
import { IoHomeSharp, IoHomeOutline } from "react-icons/io5"
import { HiOutlineGift, HiGift } from "react-icons/hi"
import { CiCoffeeCup } from "react-icons/ci"
import { BsCreditCard2Front } from "react-icons/bs"

const Header = () => {
    const location = useLocation().pathname

    return (
<>
{/* desktop and table version */}
            <header className='px-24 sm:flex flex-col lg:flex-row bg-white items-center lg:justify-between  py-5 text-lg hidden sm:gap-9 fixed z-[99999] w-full top-0  ' >
                <div className='lg:flex lg:flex-row items-center flex flex-col gap-8 '>
                <div className='mr-4 '>
                    <img src={logo} alt="starbucks-logo" className=' w-11 cursor-pointer' />
                </div>
                <nav className='flex items-center lg:gap-16 gap-10 '>
                    <NavLink to={"/dashboard"} className={({ isActive }) => `text-slate-700 ml-14 ${isActive ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 text-[#2e2a2a]" : ""} `}>Home</NavLink>
                    <NavLink to={"/giftcards"} className={({ isActive }) => `text-slate-700 ${isActive ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 text-[#2e2a2a]" : ""} `}>Gift</NavLink>
                    <NavLink to={"/ordering"} className={({ isActive }) => `text-slate-700 ${isActive ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 text-[#2e2a2a]" : ""} `}>Order</NavLink>
                    <NavLink to={"/pay"} className={({ isActive }) => `text-slate-700 ${isActive ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 text-[#2e2a2a]" : ""} `}>Pay</NavLink>
                    <NavLink to={"/store"} className={({ isActive }) => `text-slate-700 ${isActive ? "border-b-2  font-s_bold  pb-2 border-solid border-green-800 text-[#2e2a2a]" : ""} `}>Store</NavLink>
                </nav>
                </div>
                <div className='flex justify-between items-center lg:w-[32%] sm:w-[94%]'>
                <div className=' text-xl text-slate-500 w-full max-w-[300px] items-center flex relative'>
                <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="coursor-pointer w-10 h-5 text-gray-500 absolute px-1 left-2 "
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9748 18.047L15.0698 14.1437C14.8164 13.8904 14.4031 13.8904 14.1506 14.147C13.8973 14.4037 13.8989 14.817 14.1539 15.072L18.0589 18.9754C18.1848 19.102 18.3506 19.1654 18.5164 19.1654C18.6839 19.1654 18.8514 19.1004 18.9781 18.972C19.2314 18.7154 19.2298 18.302 18.9748 18.047ZM0.833984 8.43037C0.833984 4.2412 4.24232 0.832031 8.43148 0.832031C12.6215 0.832031 16.0315 4.2412 16.0315 8.43037C16.0315 8.9262 15.9832 9.42203 15.8882 9.9037C15.819 10.2587 15.4715 10.4879 15.1248 10.4179C14.7723 10.3479 14.5432 10.0045 14.6132 9.65036C14.6915 9.2512 14.7307 8.8412 14.7307 8.43037C14.7307 4.96203 11.9048 2.13953 8.43148 2.13953C4.95898 2.13953 2.13398 4.96203 2.13398 8.43037C2.13398 11.9004 4.95898 14.7229 8.43148 14.7229C10.1882 14.7229 11.819 14.0187 13.0215 12.7404C13.2682 12.477 13.6807 12.467 13.9407 12.7154C14.2015 12.9637 14.2123 13.377 13.9657 13.6395C12.5357 15.1595 10.519 16.0304 8.43148 16.0304C4.24232 16.0304 0.833984 12.6212 0.833984 8.43037Z"
                fill="black"
                fill-opacity="0.58"
              />
            </svg>
                        <input type="text" className='text-sm indent-9 w-full bg-transparent shadow-md border-none outline-none  py-2 px-3 rounded-full focus:ring-1 focus:ring-black ' placeholder="Looking for something specific ?" />
                    </div>

                    <div className=' text-2xl text-slate-500 border-[2px] p-1 rounded-full border-[#212529] cursor-pointer '>
                        <RiUserLine />
                    </div>
                    </div>
            
            </header>
          
           {/* mobile version  */}
           <div className='h-40 sm:hidden overflow-hidden relative '>
                <div className=''>
                    <img src={welcomeImage} />
                </div>
                <div className='w-full absolute top-0 text-white text-2xl p-3'>
                    <div className='px-3 py-2 sm:w-11/12 m-auto flex justify-between'>
                        <Link to={""}>
                            <BsShop />
                        </Link>
                        <Link to={""} className="border-2 border-white border-solid rounded-full">
                            <RiUserLine />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 flex justify-between w-full bg-white sm:hidden z-50 '>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={"dashboard"} className="text-xl">
                        {
                            location === "/dashboard" ? <IoHomeSharp className='text-green-800' /> : <IoHomeOutline className='text-green-500' />
                        }

                    </Link>
                    <p className='text-xs'>Home</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={"giftcards"} className="text-xl">
                        {
                            location === "/giftcards" ? <HiGift className='text-green-800' /> : <HiOutlineGift className='text-green-500' />
                        }
                    </Link>
                    <p className='text-xs'>Gift</p>
                </div>
                <div className='flex items-center flex-col  w-full'>
                    <Link to={"ordering"} className="text-xl ">
                        <div className='h-9 w-16  relative flex justify-center ite  ms-center rounded-full '>
                            <div className='absolute -top-7 text-4xl p-3 bg-green-600  rounded-full'>
                                {
                                    location === "/ordering" ? <CiCoffeeCup className='text-white' /> : <CiCoffeeCup className='text-white' />
                                }
                            </div>
                        </div>


                    </Link>
                    <p className='text-xs bg-white w-full text-center h-full '>Order</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={"pay"} className="text-xl">
                        {
                            location === "/pay" ? <BsCreditCard2Front className='text-green-800' /> : <BsCreditCard2Front className='text-green-500' />
                        }

                    </Link>
                    <p className='text-xs'>Pay</p>
                </div>
                <div className='flex items-center flex-col p-4 bg-white w-full'>
                    <Link to={"search"} className="text-xl">
                        {
                            location === "/search" ? <BsSearch className='text-green-800' /> : <BsSearch className='text-green-500' />
                        }
                    </Link>
                    <p className='text-xs'>Search</p>
                </div>

            </div>

</>
    )
}

export default Header