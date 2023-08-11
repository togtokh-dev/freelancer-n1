import { Router } from "express";
const router = Router();
import languageRouter from "./language/router";
import dataRouter from "./data/router";
router.use("/language", languageRouter);
router.use("/data", dataRouter);
export default router;
