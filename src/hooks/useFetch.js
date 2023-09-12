import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

const [users, setUsers] = useState()

const getAllApi = (path) =>{
    axios.get(`${url}${path}/`)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
}

const createNewApi = (path, data) => {
    axios.post(`${url}${path}/`, data)
    .then(res => {
        console.log(res.data)
        setUsers([...users, res.data])
    })
    .catch(err => console.log(err))
}

const deleteApiById = (path, id) => {
    axios.delete(`${url}${path}/${id}`)
    .then(res => {
        console.log(res.data)
        const apiFilter = users.filter(user => user.id !== id)
        setUsers(apiFilter)
    })
    .catch(err => console.log(err))
}

const updateApiById = (path, id, data) => {
    axios.patch(`${url}${path}/${id}/`, data)
        .then(res => {
            console.log(res.data)
            const changeApi = users.map(user =>{
                if(data.id === user.id){
                    return data
                } else {
                    return user
                }
        })
            setUsers(changeApi)
        })   
        .catch(err => console.log(err)) 
}

return [users, getAllApi, createNewApi, deleteApiById, updateApiById ]

}

export default useFetch