import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../imports/Header';

function Home() {

    const user = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();
    
    const route = () => {
       const token = localStorage.getItem('x-access-token')
       return token ? true : false
    }

    useEffect(() => {
        if (!route()){
            navigate('/login');
        }
    }, [route, navigate])


    return (
        <>
        <Header></Header>
       <div className="container">
           <h4>Welcome to Home Page</h4>
           
    </div>
    </>
    )
}

export default Home;