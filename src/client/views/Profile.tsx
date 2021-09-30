import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Users } from '../../../types';
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const history = useHistory();

    const [user, setUser] = useState<Users['id']>(null);
    useEffect(() => {
        apiService('/api/users')
            .then(data => setUser(data))
    }, [])

    const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        localStorage.clear();
        history.push('/login')
    }
    return (
        <Layout>
            <h1 className="text-center">{user}</h1>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary mx-3" to="/">Home</Link>
                <button onClick={handleSignOut} className="btn btn-primary mx-3">Sign Out</button>
            </div>
        </Layout>
    )
}

export default Profile;
