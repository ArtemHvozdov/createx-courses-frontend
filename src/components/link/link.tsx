interface LinkProps {
    className: string;
    href: string;
    linkText: string;
}

function Link(props: LinkProps) {
    return (
        <a className={props.className} href={props.href}>{props.linkText}</a>
    )
}

export default Link;