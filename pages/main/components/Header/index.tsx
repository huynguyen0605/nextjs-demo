import Button from "../../../../components/Button";
import { useHeader } from "./useHeader";

import "../../../../styles/main.module.scss"

function Header() {
    const { content, increaseCount, count } = useHeader();
    return (<>
    <div className="main main-content">{content}</div>
    <div>count header: {count}</div>
    <Button onClick={() => increaseCount()}>Change count</Button>
    </>)
}

export default Header;