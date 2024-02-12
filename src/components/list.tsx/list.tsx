import { ReactNode } from "react";

interface ListProps {
    className: string;
    children: ReactNode
}

function List(props: ListProps) {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

export default List;
