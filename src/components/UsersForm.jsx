  import React, { useEffect } from "react";
  import { useForm } from "react-hook-form";

  const UsersForm = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setIsClose, handleClose}) => {
      
      const {handleSubmit, register, reset} = useForm()

      useEffect(() => {
        reset(updateInfo)
      },[updateInfo])

      const defaultImg = '/user-default.png'

      const submit = (data) => {
        if(!data.image_url){
          data.image_url = defaultImg
        }
        if(updateInfo){
          updateUserById('/users', updateInfo.id, data)
          setUpdateInfo()
        } else{
          createNewUser('/users',data)
        }
        reset({
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          birthday: '',
          image_url: '',
        })
        setIsClose(true)
      }

      return (
      <form onSubmit={handleSubmit(submit)} className="bg-slate-700 flex flex-col gap-3 items-center mx-auto w-72 py-7 px-0 rounded-lg relative">
        <h2 className="text-white font-bold text-xl">Create New User</h2>
        <div>
          <label htmlFor="email" className="format text-white">Email</label>
          <input {...register('email')} id="email" type="email" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <div>
          <label htmlFor="password" className="format text-white">Password</label>
          <input {...register('password')} id="password" type="password" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <div>
          <label htmlFor="first_name" className="format text-white">First Name</label>
          <input {...register('first_name')} id="first_name" type="text" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <div>
          <label htmlFor="last_name" className="format text-white">Last Name</label>
          <input {...register('last_name')} id="last_name" type="text" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <div>
          <label htmlFor="birthday" className="format text-white">Birthday</label>
          <input {...register('birthday')} id="birthday" type="date" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <div>
          <label htmlFor="image_url" className="format text-white">Image url</label>
          <input {...register('image_url', {required:false})} id="image_url" type="text" className="w-60 px-2 py-1 font-light rounded-md"/>
        </div>
        <button className="bg-green-400 hover:bg-green-600 w-28 h-8 text-white font-semibold mt-3 rounded">{updateInfo ? 'Update' : 'Create'}</button>
        <div onClick={handleClose} className="absolute font-bold top-2 right-2 flex justify-center items-center text-xl w-6 h-6  hover:bg-red-500 hover:text-white rounded-full"><i className='bx bx-x font-bold'></i></div>
      </form>
    );
  };

  export default UsersForm;
