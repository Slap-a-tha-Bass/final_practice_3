import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
import { useForm } from '../utils/functions';

const Register = () => {
    const history = useHistory();
    const { values, handleChanges, clear } = useForm();
    
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values){
            alert('Oops, fill out required fields!');
            return;
        }
        apiService('/api/users', 'POST', { email: values.email, password: values.password, role: 'guest' })
            .then(data => {
                clear(),
                history.push('/profile')
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

export default Register;
