import errorHandler from "errorhandler";
import app from "./app";
import https from "https";
import fs from "fs";
import http from "http";
import path from "path";
import IP from "ip";
// import pool from "./config/sql";
/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

let server;
if (process.env.NODE_ENV === "production") {
  server = https.createServer(
    {
      key: fs.readFileSync(path.resolve(__dirname, "../ssl/privkey.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "../ssl/fullchain.pem")),
    },
    app
  );
} else {
  server = http.createServer(app);
}

/**
 * Start Express server
 */
server.listen(app.get("port"), async () => {
  const ipAddress = IP.address();
  if (process.env.NODE_ENV === "production") {
    console.log(
      "App id running at https://%s:%d in %s mode",
      ipAddress,
      app.get("port"),
      app.get("env")
    );
  } else {
    console.log(
      "App id running at http://%s:%d in %s mode",
      ipAddress,
      app.get("port"),
      app.get("env")
    );
  }

  console.log("Press CTRL-C to stop\n");
});
export default server;
