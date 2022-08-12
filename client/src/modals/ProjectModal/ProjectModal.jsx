import React from 'react';
import './ProjectModal.css';

const ProjectModal = (props) => {

    if (!props.showModal) {
        return null;
    }

    // Deconstruct Props Data
    const { animateImage, githubLink, liveLink, name, projDesc, projDesc2, stillImage, techStack, role } = props.data

    // Read Data Attribute to Toggle Rendering Still File and Gif File 
    const handleAnimate = (e) => {
        const target = e.currentTarget;
        if (target.attributes.data.value === 'still') {
            target.src = animateImage;
            target.attributes.data.value = 'animate'
            return;
        }
        target.src = stillImage;
        target.attributes.data.value = 'still'
    }

    // Close Modal and Remove Class that Prevented Scrolling the Body
    const handleClose = () => {
        props.setShowModal(false);
        document.body.classList.remove('App-scrollLock');
    }

    return (
        <section className='ProjModal-container ProjModal-ParseText App-zIndex-2'>
            <article className='ProjModal-close'>
                <button
                    className='ProjModal-button'
                    onClick={handleClose}
                >X</button>
            </article>
            <article className='ProjModal-content'>
                <img
                    src={animateImage}
                    data='animate'
                    alt={`${name} demo`}
                    className='ProjModal-img'
                    title='Click To Stop Gif'
                    onClick={handleAnimate}
                ></img>
                <h3>{name}</h3>
                <p>{projDesc}</p>
                { projDesc2 &&
                    <p>{projDesc2}</p>
                }
                <p>{role}</p>
                <p>{techStack}</p>
                <article className='ProjModal-icon-container'>
                    {/* GitHub */}
                    <a href={githubLink} title={`View ${name} on GitHub`} target="_blank" rel="noreferrer">
                        <img className='ProjModal-icons' src='/assets/img/icons/github.svg' alt='Logo for GitHub website'></img>
                    </a>
                    {/* Site Link */}
                    <a href={liveLink} title={`View ${name} Site`} target="_blank" rel="noreferrer">
                        <img className='ProjModal-icons' src='/assets/img/icons/site.svg' alt='Icon to go to live site'></img>
                    </a>
                </article>
            </article>

        </section>
    );
};

export default ProjectModal;