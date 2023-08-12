import { Router } from "express";
const router = Router();
import { getall, one, create, remove, update } from "./controller";
router.get("/", getall);
router.get("/:id", one);
router.post("/", create);
router.delete("/:id", remove);
router.put("/:id", update);
export default router;
