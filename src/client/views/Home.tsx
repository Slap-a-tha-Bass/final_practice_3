import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Books, Categories } from '../../../types'
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
import { useForm } from '../utils/functions';

const Home = () => {
    const history = useHistory();
    const { values, handleChanges, clear } = useForm();

    const [categories, setCategories] = useState<Categories[]>([]);

    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid })
            .then(data => {
                clear(),
                history.push('/books');
            })
    }
    return (
        <Layout>
            <form className="form-group">
                <label htmlFor="">Title</label>
                <input
                    value={values.title || ''}
                    onChange={handleChanges}
                    type="text"
                    className="form-control"
                    name="title"
                />
                <label htmlFor="">Author</label>
                <input
                    value={values.author || ''}
                    onChange={handleChanges} 
                    type="text"
                    className="form-control"
                    name="author"
                />
                <label htmlFor="">Price</label>
                <input
                    value={values.price || ''}
                    onChange={handleChanges}
                    type="text"
                    className="form-control"
                    name="price"
                />
                <select onChange={handleChanges} name="categoryid">
                    <option value="0">Choose Genre</option>
                    {categories.map((values) => (
                        <option key={values.id} value={values.id} >
                            {values.name}
                        </option>
                    ))}
                </select>
                <div className="d-flex justify-content-center">
                    <button onClick={handleSubmit} className="btn btn-primary">submit</button>
                    <Link to="/profile">profile</Link>
                </div>
            </form>
        </Layout>
    )
}

export default Home;
