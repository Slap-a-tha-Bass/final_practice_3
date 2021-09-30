import React from 'react';
import { Link } from 'react-router-dom';
import { Books } from '../../../types';

const BookCard = (props: Books) => {
    return (
        <div className="card">
            <h1 className="card-header">{props.title}</h1>
            <div className="card-body">
                <h3 className="card-title">{props.author}</h3>
                <div className="card-text">${props.price}</div>
            </div>
            <div className="d-flex justify-content-center">
                {props.isPreview && <Link to={`/${props.id}/edit`} className="btn btn-primary mx-3">Edit</Link>}
                {props.isPreview && <button className="btn btn-primary mx-3">Delete</button>}
            </div>
        </div>
    )
}

export default BookCard;
