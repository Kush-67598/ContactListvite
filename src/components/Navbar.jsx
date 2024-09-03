import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-black font-mono text-white p-4 sticky '>
<ul className='flex gap-4 justify-center items-center'>
    <li className='hover:font-bold hover:border-b-2 cursor-pointer  '>Home</li>
    <li className='hover:font-bold hover:border-b-2 cursor-pointer '>Contacts</li>
    <li className='hover:font-bold hover:border-b-2 cursor-pointer  '>About</li>
</ul>
        </nav>
    </>
      
  )
}

export default Navbar
