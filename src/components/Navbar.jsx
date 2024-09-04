import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav className='bg-black font-mono text-white p-4 sticky '>
<ul className='flex gap-4 justify-center items-center'>
  
   <Link to='/'><li className='hover:font-bold hover:border-b-2 cursor-pointer'>Home</li></Link>
   <Link to='/Contacts'><li className='hover:font-bold hover:border-b-2 cursor-pointer'>Contacts</li></Link>
    <li className='hover:font-bold hover:border-b-2 cursor-pointer'>About</li>
</ul>
        </nav>
    </>
      
  )
}

export default Navbar
