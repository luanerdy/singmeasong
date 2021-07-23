import supertest from "supertest";
import { app } from "../../../src/app";

const decreaseScore = async (id: string) => {
    const decreased = await supertest(app)
        .post(`/recommendations/${id}/downvote`);

    return decreased;
};

export { decreaseScore };
