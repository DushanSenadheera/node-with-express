import { Router } from "express";
import {
  getApi,
  addEmp,
  delEmp,
  getAllEmp,
  getEmpById,
  updateEmp,
} from "./controller";

const router = Router();

router.get("/api", getApi);
router.get("/", getAllEmp);
router.get("/:id", getEmpById);
router.post("/", addEmp);
router.put("/", updateEmp);
router.delete("/", delEmp);

export default router;