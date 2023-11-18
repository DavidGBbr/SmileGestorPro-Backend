import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateProcedureController } from "./controllers/procedure/CreateProcedureController";
import { ListProcedureController } from "./controllers/procedure/ListProcedureController";
import { UpdateProcedureController } from "./controllers/procedure/UpdateProcedureController";
import { CheckSubscriptionController } from "./controllers/procedure/CheckSubscriptionController";
import { CountProcedureController } from "./controllers/procedure/CountProcedureController";
import { DetailProcedureController } from "./controllers/procedure/DetailProcedureService";
import { NewScheduleController } from "./controllers/schedule/NewScheduleController";
import { ListScheduleController } from "./controllers/schedule/ListScheduleController";
import { FinishScheduleController } from "./controllers/schedule/FinishScheduleController";

export const router = Router();

//User Routes
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

//Procedure Routes
router.post(
  "/procedure",
  isAuthenticated,
  new CreateProcedureController().handle
);
router.get(
  "/procedures",
  isAuthenticated,
  new ListProcedureController().handle
);
router.put(
  "/procedure",
  isAuthenticated,
  new UpdateProcedureController().handle
);
router.get(
  "/procedure/check",
  isAuthenticated,
  new CheckSubscriptionController().handle
);
router.get(
  "/procedure/count",
  isAuthenticated,
  new CountProcedureController().handle
);
router.get(
  "/procedure/detail",
  isAuthenticated,
  new DetailProcedureController().handle
);

//Schedule routes
router.post("/schedule", isAuthenticated, new NewScheduleController().handle);
router.get("/schedule", isAuthenticated, new ListScheduleController().handle);
router.delete(
  "/schedule",
  isAuthenticated,
  new FinishScheduleController().handle
);
