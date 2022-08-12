import React, { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import './DarkToggler.css';

const DarkToggler = (props) => {

    const [{ darkMode }, dispatch] = useGlobalContext();

    const handleToggle = () => {
        if (darkMode) {
            localStorage.setItem('darkMode', false);
            dispatch({ type: 'setDarkMode', payload: false });
            return;
        } 
        localStorage.setItem('darkMode', true);
        dispatch({ type: 'setDarkMode', payload: true });
    }

    useEffect(() => {
        if (darkMode) document.querySelector('#toggler').checked = true;
    }, [darkMode])

    return (
        <label className="DarkToggler">
            <input
                id='toggler'
                type='checkbox'
                onClick={handleToggle}
            />
            <span className='DarkToggler-slider DarkToggler-round'></span>
        </label>
    );
};

export default DarkToggler;