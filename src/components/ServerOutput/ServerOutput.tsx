import {IComponent} from "../types.ts";
import {clsx} from "clsx";
import {useContext} from "react";
import {TaskContext} from "../../context/taskContext.ts";
import './ServerOutput.scss'

type IServerOutputProps = IComponent & {};
export const ServerOutput = ({className}: IServerOutputProps) => {
    const {taskServerResponse} = useContext(TaskContext);
    return (
        <div className={clsx(className, "wrapper")}>
            Консоль:
            {taskServerResponse &&
                <div
                    className={clsx("output__text", {"error": taskServerResponse.status !== "success"})}>{taskServerResponse.message}</div>}
        </div>
    );
};

