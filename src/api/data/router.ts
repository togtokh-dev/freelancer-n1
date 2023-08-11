import { Router } from "express";
const router = Router();
import { getall } from "./controller";
router.get("/", getall);
export default router;
