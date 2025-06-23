import { JWT_PASSWORD } from "./config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const header = req.headers["authorization"];

  if (!header) {
    res.status(403).json({ message: "No token provided" });
    return;
  }

  try {
    const token = header.split(" ")[1]; // get token after 'Bearer'
    const decoded = jwt.verify(token, JWT_PASSWORD) as { id: string };

    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
