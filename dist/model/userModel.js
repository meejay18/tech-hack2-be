"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    userLocation: {
        type: String,
        required: true,
    },
    friends: {
        type: Number,
    },
    likes: {
        type: Number,
    },
    likedBy: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "user",
        },
    ],
    friendRequest: [
        {
            sender: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ["pending", "accepted", "declined"],
                default: "pending",
            },
        },
    ],
});
exports.default = (0, mongoose_1.model)("user", userModel);
