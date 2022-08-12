import React from 'react';
import DarkContentHook from '../../hooks/DarkContentHook';
import DarkToggler from '../../layouts/DarkToggler/DarkToggler';
import './Intro.css';

const Intro = (props) => {

    const [backImg, ] = DarkContentHook('App-backImg-1-dark', 'App-backImg-1-light');

    return (
        <section className={`App-backImg ${backImg}`}>
            <article className='Intro-dark-toggle'>
                <DarkToggler
                />
            </article>
            <article className='Intro-container'>
                <article className='Intro'>
                    <h1 className='App-typedFix App-dropShadow'>
                       
                    </h1>
                    <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    />
                    <h2
                        className='App-typedFix Intro-margin App-dropShadow'
                    >
                        {/* Delay time so this starts when my name finishes typing */}
                     
                    </h2>
                </article>
            </article>
        </section>
    );
};

export default Intro;