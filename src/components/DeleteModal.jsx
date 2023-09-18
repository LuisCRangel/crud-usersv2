import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const DeleteModal = ({modalClose}) => {

  return (
    <div className='bg-slate-700 w-96 h-72 py-12 px-9 text-center flex flex-col justify-between rounded-md'>
        <h1 className='text-green-400 text-4xl'>Success!</h1>
        <p className='text-white text-lg'>The user has been successfully deleted</p>
        <button onClick={modalClose} className='bg-cyan-500 px-5 py-1 rounded-sm'>Acept</button>
    </div>
  )
}

export default DeleteModal