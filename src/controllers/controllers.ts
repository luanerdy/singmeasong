import { recommendations } from "./recommendations/recommendations";
import { Express } from "express";

const controllers = (app: Express) => {
    recommendations(app);
};

export { controllers };
