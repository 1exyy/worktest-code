import {createContext} from "react";
import {IServerResponse} from "../models/IServerResponse.ts";

export const TaskContext = createContext<ITaskContext>({
    taskServerResponse: null,
    setTaskServerResponse: (): void => {
    }
});

export interface ITaskContext {
    taskServerResponse: IServerResponse | null;
    setTaskServerResponse: (response: IServerResponse) => void;
}