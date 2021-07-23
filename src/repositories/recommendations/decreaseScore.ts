import { connection } from '../../config/connection';
import { deleteRecommendation } from './deleteRecommendation';

const decreaseScore = async (id: number) => {
	const decreaseScoreSQL = `
                UPDATE recommendations
                SET score = score - 1
                WHERE id = $1`;

	const getScoreSQL = `
                SELECT * FROM recommendations
                WHERE id = $1`;

	const decreased = await connection.query(decreaseScoreSQL, [id]);
	const success = decreased.rowCount === 1;

	if (success) {
		const score = await connection.query(getScoreSQL, [id]);

		if (score.rows[0].score < -5) deleteRecommendation(id);
	}

	return success;
};

export { decreaseScore };
