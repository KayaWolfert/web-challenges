import { createServer } from "node:http";

export const server = createServer((request,response) => {

    if (request.url === "/api/fish/1"){
        response.statusCode = 200;
        return response.end("Shrimp");
    }

    else if (request.url === "/api/fish/2"){
        response.statusCode = 200;
        return response.end("Anemonefish")
    }

    response.statusCode = 404;
    response.end("404, page not found");
})
