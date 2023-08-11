import { Request, Response, Router } from "express";
import mainRouter from "./api/routes";
// Routes
const router = Router();
const routers = Router();
//
router.use("/", mainRouter);
//
routers.use("/api/v1", router);
// Router not found
routers.all("*", (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "404",
  });
});

export default routers;
