import React, { useState } from 'react';
import { Books } from '../../../types'
const Home = () => {

    const [values, setValues] = useState<Books>({});

    const handleChanges = e => setValues(prev => ({...prev, [e.target.name]: e.target.value }));

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <form className="form-group">
                        <label htmlFor="">Title</label>
                        <input 
                        value={}
                        onChange={}
                        type="text" 
                        className="form-control" 
                        name="title"
                        />
                        <label htmlFor="">Author</label>
                        <input
                        value={}
                        onChange={} 
                        type="text" 
                        className="form-control"
                        name="author"
                        />
                        <label htmlFor="">Price</label>
                        <input 
                        value={}
                        onChange={}
                        type="text" 
                        className="form-control"
                        name="price" 
                        />
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Home;
