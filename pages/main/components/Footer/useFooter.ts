import { useEffect, useState } from "react";

export const useFooter = () => {
    const [content, setContent] = useState("Footer loading");
    useEffect(()=> {
        setContent("Footer loaded");
    }, []);
    return { content }
};