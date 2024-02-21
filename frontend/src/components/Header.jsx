import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import {FaMoon} from "react-icons/fa"



const Header = () => {
    const path = useLocation().pathname
  return (
    
    <nav className='border-b-2 flex justify-between pl-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold :dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg  text-white
            '>Ambivert's</span>
            Blog
        </Link>
        <form >
            <input style={{paddingBlock:"10px"}}  type="text" placeholder='Search...' />
                <button >
                    <SearchIcon />
                </button>
        </form>
        <div className='flex gap-2 md:order-2 pt-1 pr-2'>
            <button className='w-12 h-10 hidden sm:inline pb-2' color='gray' >
                <FaMoon/>
            </button>
            <Link to={'/sign-in'} >
                <button className='px-2 py-1 bg-gradient-to-r from-indigo-500
                via-purple-500 to-pink-500 rounded-lg text-white ' >
                    Sign In
                </button>

            </Link>
        </div>
        <nav className='border-b-2 flex justify-between pt-2'>
            <Link to={"/"} active={path==="/"} as={"div"}>
                Home
            </Link>
            <Link to={"/about"}active={path==="/about"} as={"div"}>
                About
            </Link>
            <Link to={"/projects"}active={path==="/projects"} as={"div"}>
                Projects
            </Link>
            <nav />
        </nav>

    </nav>
  )
}

export default Header