import React from 'react'

import { Link } from 'react-router-dom';
import Logout from './Logout';

import { logoutAction } from '../../container/actions';
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutAction())
    }

    return (
        <header>
        <nav>
            <Link to="/">
            <h5>Home Page</h5>
            </Link>
            <button type="button">

            </button>
            <Logout onLogout={logout}></Logout>
            </nav>
            </header>
    )
}