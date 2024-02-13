interface textProps {
    className: string;
    text: string;
}

function Text(props: textProps) {
    return (
        <span className={props.className}>
            {props.text}
        </span>
    )
}

export default Text;