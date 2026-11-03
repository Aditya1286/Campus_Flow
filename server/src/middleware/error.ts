import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFound: RequestHandler = (request, response) => {
  response.status(404).json({
    success: false,
    message: `Route not found: ${request.method} ${request.originalUrl}`
  });
};

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({
    success: false,
    message: "Internal server error"
  });
};
