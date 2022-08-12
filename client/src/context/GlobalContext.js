import { createContext, useContext, useReducer } from 'react';

export const GlobalContext = createContext();

const localDarkMode = JSON.parse(localStorage.getItem('darkMode'));

const determineDarkMode = () => {
    // Check No Local Storage
    if (localDarkMode === null) {
        // Check matchMedia Support
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Default to false
        } else {
            return false;
        }
    // Use data From Local
    } else {
        return localDarkMode;
    }
}

const defaultState = {
    // Functions
    hidesLoader: () => document.querySelector('.load-icon').classList.add('hide-icon'),
    showLoader: () => document.querySelector('.load-icon').classList.remove('hide-icon'),
    darkMode: determineDarkMode(),
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setDarkMode':
            return {
                ...state,
                darkMode: action.payload
            };
        default: return state;
    }
};

const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <GlobalContext.Provider value={[state, dispatch]} {...props} />
    );

};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};