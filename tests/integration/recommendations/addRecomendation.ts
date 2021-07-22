import supertest from "supertest";
import { app } from "../../../src/app";

type Recommendation = {
    name: string,
    youtubeLink: string
}

const addRecommendation = async (body: Recommendation) => {
    const recommendation = await supertest(app)
        .post('/recommendations')
        .send(body);

    return recommendation;
};

export { addRecommendation };
