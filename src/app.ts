import express, { Express, Request, Response } from "express";
import logger from "./util/req-logger";
import routers from "./routes";
import connectDB from "./config/db";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileupload from "express-fileupload";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import morgan from "morgan";
import compression from "compression";
const jsonParser = bodyParser.json();
const app: Express = express();
import date from "date-and-time";
connectDB();
const cors_urls = [];
app.use(
  morgan(function (tokens: any, req: any, res: any) {
    return [
      date.format(new Date(), "YYYY/MM/DD HH:mm:ss"),
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);
app.use(
  cookieParser(),
  fileupload(),
  jsonParser,
  compression(),
  lusca.xframe("SAMEORIGIN"),
  lusca.xssProtection(true),
  cors({
    origin: "*",
    allowedHeaders: "Set-Cookie, Content-Type, Authorization",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  }),
  function (req, res, next) {
    logger.debug(
      `${date.format(new Date(), "YYYY/MM/DD HH:mm:ss")} ${req.originalUrl}`
    );
    next();
    express.json();
  }
);
app.use(
  "/public",
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);
app.use(routers);
app.set("port", process.env.PORT || 3000);
export default app;
