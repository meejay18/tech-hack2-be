import { Router } from "express";
import {
  createUser,
  handleRequest,
  likeUser,
  searchUserLocation,
  sendRequest,
} from "../controlller/userController";

const router: any = Router();

router.route("/search-location").get(searchUserLocation);
router.route("/send-request").post(sendRequest);
router.route("/receive-request").post(handleRequest);
router.route("/like-user/:userID/:likedUserID").post(likeUser);
router.route("/create-user").post(createUser);

export default router;
