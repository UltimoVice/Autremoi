import React from 'react'

const Add = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    //add new item
  return (
    <div className='add w-full h-full absolute top-0 left-0 bg-[rgb(0,0,0,0.724)] flex items-center justify-center'>
      <div className='modal p-[50px] rounded-lg relative bg-slate-900'>
    <span className='close absolute top-2 right-2 cursor-pointer' onClick={() => props.setOpen(false)}>X</span>
    <h1 className='text-2xl mb-10 font-semibold'>Add new {props.slug}</h1>
    <form className='flex max-w-[450px] justify-between flex-wrap' onSubmit={handleSubmit}>
        {props.columns.filter((item) => item.field !== "id" && item.field !== "img")
        
        .map((column) => (
            <div className='item flex flex-col gap-2 mb-5'> 
            <label className='text-[14px] '> {column.headerName} </label>
            <input className='p-[10px] bg-transparent text-white outline-none border border-solid rounded-[3px]' type={column.type} placeholder={column.field}/>
            </div>
        ))}    
    </form>
     <button className='bg-white text-slate-900 p-3 rounded cursor-pointer'>Send</button>
      </div>
    </div>
  )
}

export default Add
