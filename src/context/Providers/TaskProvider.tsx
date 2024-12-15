import {ReactElement, useState} from "react";
import {TaskContext} from "../taskContext.ts";
import {IServerResponse} from "../../models/IServerResponse.ts";


type TTaskProviderProps = {
    children: ReactElement;
}
export const TaskProvider = ({children}: TTaskProviderProps) => {
    const [taskServerResponse, setServerResponse] = useState<IServerResponse | null>(null);
    const setTaskServerResponse = (response: IServerResponse): void => {
        setServerResponse(response);
    }

    return (
        <TaskContext.Provider
            value={{
                taskServerResponse,
                setTaskServerResponse,
            }}>{children}</TaskContext.Provider>
    );
};

