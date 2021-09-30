import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Books } from '../../../types';
import BookCard from '../components/BookCard';
import Layout from '../components/Layout';
import { apiService } from '../utils/api-service';

const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Books>(null);
    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => setBook(data))
    }, [id])
    return (
        <Layout>
            <BookCard key={id} {...book} isPreview />
        </Layout>
    )
}

export default BookDetails;
