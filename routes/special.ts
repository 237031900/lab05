import Router, { RouterContext } from "koa-router";
import { basicAuth } from "../controllers/auth";

const router = new Router({ prefix: "/api/v1" });

router.get("/private", basicAuth);

export { router };
