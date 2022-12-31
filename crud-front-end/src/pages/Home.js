import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {


    //viet function

    //function getAllUsers
    const [users, setUsers] = useState([])
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user/users")
        setUsers(result.data)
    }
    //hien thi khi chay chuong trinh trong console
    useEffect(() => {
        loadUsers();
    }, []);

    //

    return (
        <div className='container'>
            <div className='pt-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <button className='btn btn-warning mx-2'>View</button>
                                        <button className='btn btn-dark mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
