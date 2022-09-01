import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/user'

const EditUsers = () => {
  
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()
  const {id} = useParams() 

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}/${id}`, {
        name: name,
        mail: mail,
        phone: phone
    })
    navigate('/')
  }

  useEffect( () => {
    const getUserById = async () => {
        const response = await axios.get(`${endpoint}/${id}`)
        setName(response.data.name)
        setMail(response.data.mail)
        setPhone(response.data.phone)
    }
    getUserById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
  return (
    <div className='d-flex justify-content-center'>
        <div className='card p-5 col-auto mt-5'>
            <form onSubmit={update}>
                <h3>Update User</h3>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input 
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input 
                        value={mail}
                        onChange={ (e)=> setMail(e.target.value)}
                        type='email'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Phone</label>
                    <input 
                        value={phone}
                        onChange={ (e)=> setPhone(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>  
        </div>
    </div>
  )
}

export default EditUsers