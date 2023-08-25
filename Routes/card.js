import express from "express"
const cardRouter=express.Router();

import { createCard,getAllcard,deleteCard,updateCard } from "../Controllers/card.js";

cardRouter.post("/createCard",createCard);
cardRouter.post("/getAllcard/:id",getAllcard);
cardRouter.delete("/deleteCard/:id",deleteCard);
cardRouter.post("/updateCard/:id",updateCard);

export default cardRouter