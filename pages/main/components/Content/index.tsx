import { useContent } from "./useContent";

function Content() {
    const { content } = useContent();
    return <div>{content}</div>
}

export default Content;