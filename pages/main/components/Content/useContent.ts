import { useEffect, useState } from "react";

export const useContent = () => {
    const [content, setContent] = useState("Content loading");
    useEffect(()=> {
        setContent("Content loaded");
    }, []);
    return { content }
};