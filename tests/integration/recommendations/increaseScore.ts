import supertest from "supertest";
import { app } from "../../../src/app";

const increaseScore = async (id: string) => {
    const increased = await supertest(app)
        .post(`/recommendations/${id}/upvote`);

    return increased;
};

export { increaseScore };
