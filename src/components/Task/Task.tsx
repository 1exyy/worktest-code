import {ReactElement} from "react";

type TTaskProps = IComponent & {
    children: ReactElement | string;
}

import "./Task.scss"
import {IComponent} from "../types.ts";
import {clsx} from "clsx";

export const Task = ({children, className}: TTaskProps) => {
    return (
        <div className={clsx("task__wrapper wrapper", className)}>
            <div className="task__title">Задача:</div>
            <div className="task__body"> {children}</div>
        </div>
    );
};

