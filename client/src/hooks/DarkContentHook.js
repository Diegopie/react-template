import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";


const DarkContentHook = (darkContent, lightContent) => {
    const [{ darkMode }, ] = useGlobalContext();

    const [content, setContent] = useState(() => {
        return (darkMode ? darkContent : lightContent)
    });

    useEffect(() => {
        darkMode ? setContent(darkContent) : setContent(lightContent);

            
    }, [darkMode, darkContent, lightContent])

    return [content, setContent]
}

export default DarkContentHook;