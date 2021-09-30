import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Books, Categories } from '../../../types'
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
const Home = () => {
    const history = useHistory();
    const [values, setValues] = useState<{ [key: string]: string }>({});
    
    const handleChanges = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));


    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { title: values.title, author: values.author, price: values.price, categoryid: values.categoryid })
            .then(data => {
                history.push('/books')
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
                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">submit</button>
                </div>
            </form>
        </Layout>
    )
}

export default Home;
