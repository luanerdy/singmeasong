import { connection } from "../../config/connection";

const increaseScore = async (id: number) => {
    const sql = `
                UPDATE recommendations
                SET score = score + 1
                WHERE id = $1`;
    
    const increased = await connection.query(sql, [id]);

    return increased.rowCount === 1;
};

export { increaseScore };
