import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
import { useForm } from '../utils/functions';

const Login = () => {
    const history = useHistory();
    const { values, handleChanges, clear } = useForm();
    
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values){
            alert('Oops, fill out required fields!');
            return;
        }
        apiService('/auth/login', 'POST', { email: values.email, password: values.password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token),
                clear(),
                history.push('/profile'),
                console.log(token)
            })
    }
    return (
        <Layout>
            <form className="form-group">
                <label>Email</label>
                <input 
                value={values.email || ''}
                onChange={handleChanges}
                type="email" 
                className="form-control"
                name="email" 
                />
                <label>Password</label>
                <input 
                value={values.password || ''}
                onChange={handleChanges}
                type="password" 
                className="form-control" 
                name="password"
                />
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>
        </Layout>
    )
}

export default Login;
