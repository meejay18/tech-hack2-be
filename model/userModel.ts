import { model, Schema, Document, Types } from "mongoose";

interface iUser {
  name: string;
  email: string;
  userLocation: string;
  friends: number;
  likes: number;
  likedBy: any[];
  friendRequest: Array<{
    sender: string;
    status: "pending" | "accepted" | "declined";
  }>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>({
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
      type: Types.ObjectId,
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

export default model<iUserData>("user", userModel);
