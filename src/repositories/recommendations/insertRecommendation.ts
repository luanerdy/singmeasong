import { connection } from "../../config/connection";

const insertRecommendation = async (name: string, youtubeLink: string) => {
    const sql = `
                INSERT INTO recommendations 
                (name, "youtubeLink", score) 
                VALUES ($1, $2, $3)`;

    await connection.query(sql, [name, youtubeLink, 1]);
};

export { insertRecommendation };
