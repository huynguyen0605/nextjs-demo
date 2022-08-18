import { useFooter } from "./useFooter";

type FooterProps = {
    name: string;
}
function Footer({name}: FooterProps) {
    const { content } = useFooter();

    return <div>{content} {name}</div>
}

export default Footer;