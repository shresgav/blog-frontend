import React from 'react';
import { Link } from 'react-router-dom'

const home = () => (
    <div className='bg-light p-5 rounded-lg m-3'>
        <h1 className="display-4">Welcome to my blog!</h1>
        <p className="lead">My first attempt at a full stack web application.</p>
        <hr className="my-4"/>
        <p>Click the button to check out my awesome blog.</p>
        <Link className="btn btn-primary btn-lg" to="/blog/" role="button">Check out my blog</Link>
    </div>
);

export default home;