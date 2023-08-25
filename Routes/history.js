import express from "express"
const historyRouter=express.Router();
import { fetchUser } from "../Middleware/fetchUser.js";

import { createHistory,getAllHistory,deleteHistory,clearAll } from "../Controllers/history.js";

historyRouter.post("/history/create",fetchUser,createHistory)
historyRouter.post("/history/getAllHistory",fetchUser,getAllHistory)
historyRouter.delete("/history/deleteHistory/:id",fetchUser,deleteHistory)
historyRouter.delete("/history/clearAll",fetchUser,clearAll)


export default historyRouter