import { useEffect, useState } from "react";

export const useMain = () => {
    const [content, setContent] = useState("Main page start");
    useEffect(()=> {
        setContent("Main page done")
    }, []);
    return { content }
};