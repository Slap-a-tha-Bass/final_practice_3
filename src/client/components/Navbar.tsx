import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className ="d-flex justify-content-center">
            <NavLink className="mx-3 btn btn-primary" to="/">home</NavLink>
            <NavLink className="mx-3 btn btn-primary" to="/books">books</NavLink>
            <NavLink className="mx-3 btn btn-primary" to="/login">login</NavLink>
            <NavLink className="mx-3 btn btn-primary" to="/register">register</NavLink>
        </div>
    )
}

export default Navbar;
