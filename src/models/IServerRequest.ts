import {TMode} from "../components/CodeEditor/types.ts";

export interface IServerRequest {
    language: TMode,
    message: string
}