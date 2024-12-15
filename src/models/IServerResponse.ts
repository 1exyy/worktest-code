export interface IServerResponse {
    status: ResponseStatus,
    message: string
}

export type ResponseStatus = "success" | "error";