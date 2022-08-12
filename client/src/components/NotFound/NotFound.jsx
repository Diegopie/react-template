import React from 'react';
import { Link } from 'react-router-dom';
import DarkContentHook from '../../hooks/DarkContentHook';
import './NotFound.css';

const NotFound = (props) => {

    // Set Classes Based On darkMode Value
    const [backImg, ] = DarkContentHook('App-backImg-1-dark', 'App-backImg-1-light');

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 className='App-dropShadow'>
                        Page Not Found 🤯
                    </h1>
                    {/* <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    /> */}
                    <section className='MyProjects-all'>
                        <Link to='/'>
                            <button className='MyProjects-button'>Return Home</button>
                        </Link>
                    </section>
                </article>
            </article>
        </section>
    );
};

export default NotFound;