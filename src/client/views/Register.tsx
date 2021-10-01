import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
import { useForm } from '../utils/functions';

const Register = () => {
    const history = useHistory();
    const { values, handleChanges, clear } = useForm();
    
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!values){
            alert('Oops, fill out required fields!');
            return;
        }
        apiService('/auth/register', 'POST', { email: values.email, password: values.password, role: 'guest', name: values.name })
            .then(token => {
                localStorage.setItem('token', token.token),
                clear(),
                history.push('/'),
                console.log(token.token, values.name, values.email, values.password)
            })
    }
    return (
        <Layout>
            <form className="form-group">
                <label>Name</label>
                <input 
                value={values.name || ''}
                onChange={handleChanges}
                type="text" 
                className="form-control"
                name="name" 
                />
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
                <button 
                onClick={handleRegister} 
                className="btn btn-primary">
                    Register
                </button>
            </form>
        </Layout>
    )
}

export default Register;
