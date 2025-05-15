import React, { useEffect, useState } from 'react';
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

    const [renderedHtml, setRenderedHtml] = useState('');
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    useEffect(() => {
        fetch(`${backendUrl}/api/app1/users/ejs-users`)
            .then(response => response.text()) // Get the response as plain text (HTML)
            .then(html => setRenderedHtml(html))
            .catch(error => console.error('Error fetching rendered HTML:', error));
    }, []);


    return (
        <>
        <Header></Header>
       <div className="container">
        <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
           <h4>Welcome to Home Page</h4>
           
    </div>
    </>
    )
}




export default Home;