import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    //dieu huong
    let navigate = useNavigate()

    //viet function
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    //gan cac thuoc tinh vo doi tuong user
    const { name, username, email } = user

    const onInputChange = (e) => {
        //set user
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        //neu khong co prevent default thi du lieu bay len url
        e.preventDefault();
        await axios.post("http://localhost:8080/user/add", user)
        navigate("/")

    }


    //

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input type="text" className='form-control'
                                placeholder='Enter your name' name='name' value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>
                                Username
                            </label>
                            <input type="text" className='form-control'
                                placeholder='Enter your Username' name='username' value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                E-mail
                            </label>
                            <input type="text" className='form-control'
                                placeholder='Enter your email' name='email' value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-success mx-2'>Submit</button>
                        <Link to='/' className='btn btn-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
