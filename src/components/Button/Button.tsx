import {IComponent} from "../types.ts";
import React, {ReactElement} from "react";

type TButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & IComponent & {
    children: ReactElement | string
}
export const Button = ({className, children, ...htmlProps}: TButtonProps) => {
    return (
        <button className={className} {...htmlProps}>
            {children}
        </button>
    );
};

