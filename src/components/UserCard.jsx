import React, { useEffect, useState } from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleClose}) => {

const handleDeleteUser = () => {
    deleteUserById('/users',user.id)
}

const handleUpdateUser = () => {
    setUpdateInfo(user)
    handleClose()
}

  return (
    <article className='w-[380px] py-2 bg-slate-800 flex flex-col rounded-lg'>
        <h2 className='text-green-400 text-xl text-center pt-2 font-bold'>{`#${user.id} ${user.first_name} ${user.last_name}`}</h2>
        <div className='flex justify-start pl-6 sm:pl-8 gap-5 sm:gap-7 mx-0 mt-4'>
              <img className='w-20 sm:w-28 h-20 sm:h-28 mt-2 sm:mt-0 rounded-full object-cover shadow-lg shadow-slate-900 ' src={user.image_url} alt="" />   
        <ul>
            <li className='text-slate-400 font-light'><span className='block text-green-200 font-medium'>Email:</span>{user.email}</li>
            <li className='text-slate-400 font-light'><span className='block text-green-200 font-medium'>Birthday</span>{`${user.birthday}`}</li>            
        </ul>
        </div> 
        <div className='flex justify-center gap-4 mt-8 pb-2'>
            <button onClick={handleDeleteUser} className='bg-red-400 hover:bg-red-500 w-24 h-8 text-white rounded-sm font-semibold'><i className='bx bx-trash'></i> Delete</button>            
            <button onClick={handleUpdateUser} className='bg-cyan-600 hover:bg-cyan-700 w-24 h-8 text-white rounded-sm font-semibold'><i class='bx bxs-edit' ></i> Update</button>            
        </div>       
    </article>
  )
}

export default UserCard