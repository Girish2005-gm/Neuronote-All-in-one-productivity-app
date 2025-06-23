import dotenv from "dotenv";
dotenv.config();

export const JWT_PASSWORD = process.env.JWT_PASSWORD || "fallback";
export const MONGODB_URI = process.env.MONGODB_URI || "";
