import { ReactNode } from "react";

interface ButtonProps {
    className: string;
    btnText: string;
    children?: ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <button className={props.className}>
            {props.btnText}
            {props.children}
        </button>
    )
}

export default Button;
