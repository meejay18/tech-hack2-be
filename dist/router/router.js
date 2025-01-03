"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controlller/userController");
const router = (0, express_1.Router)();
router.route("/search-location").get(userController_1.searchUserLocation);
router.route("/send-request").post(userController_1.sendRequest);
router.route("/receive-request").post(userController_1.handleRequest);
router.route("/like-user/:userID/:likedUserID").post(userController_1.likeUser);
router.route("/create-user").post(userController_1.createUser);
exports.default = router;