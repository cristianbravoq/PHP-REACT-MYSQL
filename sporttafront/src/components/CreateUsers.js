import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/user'

const CreateUsers = () => {
  
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {name: name, mail: mail, phone: phone})
    navigate('/')
  }

    
  return (
    <div className='d-flex justify-content-center'>
        <div className='card p-5 mt-5'>
            <form onSubmit={store}>
                <h3>Create User</h3>
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

export default CreateUsers