"use client"
import Image from 'next/image'
import { useState } from "react";
import Link from 'next/link'
import { LuAlignJustify } from "react-icons/lu";
import {  RxCross1} from "react-icons/rx";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className='h-[100px] w-full bg-white border-b border-gray-200 flex items-center justify-center'>
    <div className='h-[41px] w-[90%] md:w-[1280px] flex items-center justify-between '>
     <Image src='/images/logo.png' alt='logo' width={185} height={41} />
     <div className='h-[24px] w-[430px] hidden md:grid '>
        <ul className='flex items-center justify-between'>
        <Link href ="/" className='text-black hover:text-golden active::underline' > <li>Home </li> </Link>
          <Link href ="/shop" className='text-black  hover:text-golden hover:underline' > <li>Shop</li> </Link>
          <Link href ="/about" className='text-black  hover:text-golden hover:underline' > <li>About</li> </Link>
          <Link href ="/conatct" className='text-black  hover:text-golden hover:underline' > <li>Contact </li> </Link>
        </ul>
     </div>
     <div className='h-[24px] w-[290px] hidden md:flex justify-between '>
     <span><Image src='/images/profile.png' alt='logo' width={28} height={28} /> </span>
        <span><Image src='/images/search.png' alt='logo' width={28} height={28} /></span>
        <span><Image src='/images/heart.png' alt='logo' width={28} height={28} /></span>
        <span><Image src='/images/shopping-cart.png' alt='logo' width={28} height={28} /></span>
     </div>
     {/* hamburger */}
     <div className="md:hidden flex text-black ">
          <button onClick={toggleMenu}>
          {isOpen ?<RxCross1 size={24} />:<LuAlignJustify size={24} />  }
          </button>
          </div>
    </div>

    {/* mobile menu */}
    {isOpen &&(
        <div className="absolute top-28   w-[95%] pb-10 border-t-2  border-b  border-gray-200  bg-white ">
          <ul className="flex flex-col gap-2 px-4 py-2">
          <Link href ="/" className='text-black hover:text-golden hover:underline' > <li>Home </li> </Link>
          <Link href ="/shop" className='text-black  hover:text-golden hover:underline ' > <li>Shop</li> </Link>
          <Link href ="/about" className='text-black  hover:text-golden hover:underline' > <li>About</li> </Link>
          <Link href ="/conatct" className='text-black  hover:text-golden hover:underline' > <li>Contact </li> </Link>
     
          </ul>
          <div className=' flex mx-2 justify-between '>
        <span><Image src='/images/profile.png' alt='logo' width={28} height={28} /> </span>
        <span><Image src='/images/search.png' alt='logo' width={28} height={28} /></span>
        <span><Image src='/images/heart.png' alt='logo' width={28} height={28} /></span>
        <span><Image src='/images/shopping-cart.png' alt='logo' width={28} height={28} /></span>
     </div>
        </div>
      )}
   
      
    </nav>
  )
}

export default Navbar
