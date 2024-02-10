interface ButtonProps {
    className: string;
    btnText: string;
}

function Button(props: ButtonProps) {
    return (
        <button className={props.className}>
            {props.btnText}
        </button>
    )
}

export default Button;