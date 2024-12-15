import {createServer} from "miragejs";
import {IServerResponse} from "../models/IServerResponse.ts";
import {IServerRequest} from "../models/IServerRequest.ts";

const testByLang = {
    go: {
        test: "fmt.PrintLn(\"Hello, world!\")",
        errorMessage: "SyntaxError: Unexpected token",
        successMessage: "Hello, world!"
    },
    python: {
        test: "print(\"Hello, world!\")",
        errorMessage: "SyntaxError: Unexpected token",
        successMessage: "Hello, world!"
    }
}

createServer({
    namespace: "api",
    routes() {
        this.post("/check", (_, request): IServerResponse => {
            const body: IServerRequest = JSON.parse(request.requestBody);
            if (!body.message) {
                return {
                    status: "error",
                    message: "Поле не может быть пустым"
                }
            }

            if (testByLang[body.language].test == body.message) {
                return {
                    status: "success",
                    message: testByLang[body.language].successMessage
                }
            } else {
                return {
                    status: "error",
                    message: testByLang[body.language].errorMessage
                }
            }
        });
    },

})
