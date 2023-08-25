import express from "express"
const bucketRouter=express.Router();
import { fetchUser } from "../Middleware/fetchUser.js";

import { createBucket,getAllBuckets ,deleteBucket,updateBucket} from "../Controllers/bucket.js";

bucketRouter.post("/bucket/create",fetchUser,createBucket);
bucketRouter.post("/bucket/getAllBuckets",fetchUser,getAllBuckets);
bucketRouter.post("/bucket/deleteBucket/:id",fetchUser,deleteBucket);
bucketRouter.post("/bucket/updateBucket/:id",fetchUser,updateBucket);

export default bucketRouter;