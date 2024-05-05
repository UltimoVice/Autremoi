import React from 'react'

const NavbarAdmin = () => {
  return (
    <div className='navbar w-full p-5 flex items-center justify-between'>
        <div className='logo flex items-center font-bold gap-3'>
            <img src="./src/assets/logoSpessoBianco.png" alt="Logo Autremoi Bianco" className='w-10 h-15'/>
            <span>Autremoi</span>
        </div>
        <div className='icons flex items-center gap-5'>
            <img src=".\src\assets\svg\search.svg" alt="search" className='cursor-pointer'/>
            {/* <img src=".\src\assets\svg\grid.svg" alt="grid" />
            <img src=".\src\assets\svg\fullscreen.svg" alt="fullscreen" /> */}
            <div className="notifications relative cursor-pointer">
             <img src=".\src\assets\svg\bell.svg" alt="bell" /> 
             <span className='bg-red-500 text-white w-4 h-4 rounded-full absolute top-[-10px] right-[-10px] flex items-center justify-center text-xs'>1</span> 
            </div>
            <div className="user flex items-center gap-3 cursor-pointer">
                <img src=".\src\assets\userImg.jpg" alt="User Image" className='w-[26px] h-[26px] rounded-full object-cover'/>
                <span>UltimoVice</span>
            </div>
            
            <img src=".\src\assets\svg\gear.svg" alt="gear" className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default NavbarAdmin