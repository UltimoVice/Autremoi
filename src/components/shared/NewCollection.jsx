import React from 'react'
import { Link } from 'react-router-dom'

const NewCollection = () => {
  return (
    <div className='relative p-8'>
      <img className='w-full h-full' src="src\assets\NewCollection2.jpg" alt="New Collection" />
      <h2 className="text-white text-center text-6xl absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 font-semibold shadow-lg" style={{ textShadow: '1px 1px 1px black' }}>AUTREMOI</h2>
     <Link to="/news">
      <button className='text-white bg-transparent p-2 border rounded-lg text-center hover:font-semibold text-4xl top-[70%] left-[50%] tranform -translate-x-1/2 -translate-y-1/2 absolute' style={{ textShadow: '1px 1px 1px black' }}>New Collection</button>
    </Link>
    </div>
  )
}

export default NewCollection
