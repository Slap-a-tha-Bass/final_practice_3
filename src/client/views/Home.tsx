import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Books, Categories } from '../../../types'
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';
const Home = () => {
    const history = useHistory();
    const [values, setValues] = useState<Books>({});

    const handleChanges = e => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const [categoryid, setCategoryid] = useState<Categories['id']>();
    const [categories, setCategories] = useState<Categories[]>([]);
    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
    }, [])
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryid(Number(e.target.value))
    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/api/books', 'POST', { categoryid })
            .then(data => {
                history.push('/books')
            })
    }
    return (
        <Layout>
            <form className="form-group">
                <label htmlFor="">Title</label>
                <input
                    // value={}
                    // onChange={}
                    type="text"
                    className="form-control"
                    name="title"
                />
                <label htmlFor="">Author</label>
                <input
                    // value={}
                    // onChange={} 
                    type="text"
                    className="form-control"
                    name="author"
                />
                <label htmlFor="">Price</label>
                <input
                    // value={}
                    // onChange={}
                    type="text"
                    className="form-control"
                    name="price"
                />
                <select onChange={handleSelect}>
                    <option value="0">Choose Genre</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <div>
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </Layout>
    )
}

export default Home;
