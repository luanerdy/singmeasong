import { connection } from "../../config/connection";

const deleteRecommendation = async (id: number) => {
    const sql = `
                DELETE FROM recommendations
                WHERE id = $1`;

    await connection.query(sql, [id]);
}

export { deleteRecommendation };
