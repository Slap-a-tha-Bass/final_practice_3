import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Books } from '../../../types';
import { apiService } from '../utils/api-service';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';

const Books = () => {

    const [books, setBooks] = useState<Books[]>([]);
    useEffect(() => {
        apiService('/api/books')
            .then(data => setBooks(data))
    }, [])
    return (
        <Layout>
            {books.map((book) => (
                <Link key={book.id} className = "text-decoration-none" to={`/books/${book.id}`}><BookCard {...book}/></Link>
            ))}
        </Layout>
    )
}

export default Books;
