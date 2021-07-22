import { connection } from "../../config/connection";

const existsRecommendation = async (youtubeLink: string) => {
    const sql = `
                SELECT * FROM recommendations
                WHERE "youtubeLink" = $1`;
    
    const result = await connection.query(sql, [youtubeLink]);

    return result.rows[0] ? true : false; 
};

export { existsRecommendation };
