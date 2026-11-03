import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
  response.json({
    success: true,
    service: "campusflow-api",
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

export default healthRouter;
