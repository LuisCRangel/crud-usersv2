import { useEffect, useState} from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UsersForm from './components/UsersForm'
import UserCard from './components/UserCard'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [isClose, setIsClose] = useState(true)

  const url = 'https://users-crud.academlo.tech/'

  const [
    users,
    getAllUser, 
    createNewUser, 
    deleteUserById, 
    updateUserById
  ] = useFetch(url)

  useEffect(() => {
    getAllUser('/users')
  },[])

  const handleOpen = () => {
    setIsClose(false)
  }

  const handleClose = () => {
    setIsClose(!isClose)
  }

  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='sticky top-0 flex justify-between items-center p-3 bg-slate-900 max-w-7xl mx-auto'>
      <h1 className='text-center text-white p-3 text-2xl font-bold font-sans'>USERS <span className=' text-sky-600'>CRUD</span></h1>
      <button onClick={handleOpen} className='flex items-center gap-1 bg-blue-950 hover:bg-blue-500 px-4 sm:px-6 h-11 text-white rounded-lg'><i className='bx bx-plus text-xl'></i>{updateInfo? 'Update Info' : 'Create New User'}</button>
      </div>
      <div className= {`form ${isClose && 'form__close'}`}>
      <UsersForm
      createNewUser = {createNewUser}
      updateInfo = {updateInfo}
      updateUserById = {updateUserById}
      setUpdateInfo = {setUpdateInfo}
      setIsClose = {setIsClose}
      handleClose = {handleClose}
      />
      </div>
      <div className='flex flex-wrap p-3 sm:p-10 justify-center gap-4'>
        {
          users?.map(user => (
            <UserCard
            user = {user}
            key={user.id}
            deleteUserById = {deleteUserById}
            setUpdateInfo = {setUpdateInfo}
            handleClose = {handleClose}
            setIsClose = {setIsClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
