import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {
  
  const [ users, setUsers ] = useState([])

  useEffect ( ()=> {
    getAllUsers()
  }, [])
  
  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/users`)
    setUsers(response.data)
  }

  const deleteUsers = async (id) => {
    await axios.delete(`${endpoint}/user/${id}`)
    getAllUsers()
  }

return (
    <div>
        <div className='d-flex justify-content-center gap-1'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>NEW USER</Link>
            <a href='http://127.0.0.1:8000' className='btn btn-primary btn-lg mt-2 mb-2 text-white'>HOME</a>
        </div>

        <table className='table table-striped'>
            <thead lassName='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                { users.map( ( user ) => (
                    <tr key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.mail} </td>
                        <td> {user.phone} </td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-success'>
                                Edit
                            </Link>
                            <button onClick={()=>deleteUsers(user.id)} className='btn btn-danger' >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default ShowUsers