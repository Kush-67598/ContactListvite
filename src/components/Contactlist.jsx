import React, { useState } from 'react'

const Contactlist = ({formArray}) => {
    const [search,setSearch]=useState('')
    
    const filteredContacts=formArray.filter((contact=>
          contact.name.toLowerCase().includes(search.toLowerCase())|| contact.phno.includes(search)
    ))
    
  return (
    <>
    <div className="bg-fuchsia-200 font-bold text-center text-black text-xl font-mono">Your Contacts</div>
    <div className='grid  h-12'>

    <input type="text" placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)} className='bg-custom-gradient text-center h-12 placeholder-black font-bold font-mono' />
    </div>
    {filteredContacts.length === 0 ? (
          <div className="text-center font-bold font-mono bg-white">No Contacts to show</div>
          ) : (
            <table className="table-fixed w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-400 h-12">
                  <th className="text-left font-mono px-2 ">Name</th>
                  <th className="text-end px-2 font-mono  ">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((item) => (
                  <tr key={item.id} className="bg-slate-200 h-14">
                    <td className="text-left font-mono px-2">
                      {item.name}
                      
                      
                    </td>
                    <td className="text-end font-mono px-2">
                      {item.phno}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    </>
  )
}

export default Contactlist
