import './LoginUser.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginUser() {


    const [formData, setFormData] = useState({
        userId: '',
        userPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formData); 
            const response = await axios.post('http://localhost:5244/api/Login', formData);
            console.log('Login successful!', response.data);
            localStorage.setItem('authToken', response.data.token);
           
           // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
            
            navigate('user/view');
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password. Please try again.'); // You can customize this message based on your API response
        }
    };
    return (
        <div className="container">

            <h4>Login to your Account</h4><br />
            <form onSubmit={handleSubmit}>
               
                <div>
                    <label htmlFor="userId">User ID </label> 
                    <input name="userId" type="number" className="form" id="userId" onChange={handleInputChange}/><br /><br />
                </div>

                <div>
                    <label htmlFor="userPassword">Password </label>
                    <input name="password" type="password" className="password" id="password" onChange={handleInputChange}/><br /><br />
                </div>
                <button className="btn btn-primary" type="submit" >Login</button><br /><br />
            </form>

            <div>
                <a ><h5>First Time User ? Register</h5><br /></a>
                <a ><h5>Forget User ID</h5><br /></a>
                <a ><h5>Forget Password</h5><br /></a>
            </div>

        </div>
    );

}

export default LoginUser;