import { connection } from '../../../src/config/connection';
import { addRecommendation } from './addRecomendation';
import { decreaseScore } from './decreaseScore';

afterAll(async () => {
	connection.end();
});

beforeEach(async () => {
	await connection.query('TRUNCATE recommendations RESTART IDENTITY');
});

describe('POST /recommendations/:id/upvote', () => {
	it('should return status 400 for invalid id', async () => {
		const id = '0';

		const increased = await decreaseScore(id);

		expect(increased.status).toBe(400);
	});

	it('should return status 404 for inexistent id', async () => {
		const id = '999999999';

		const increased = await decreaseScore(id);

		expect(increased.status).toBe(404);
	});

	it('should return status 200 and increase score for valid id', async () => {
		const id = '1';
		const body = {
			name: 'Tareco e mariola',
			youtubeLink: 'https://www.youtube.com/watch?v=zF9f_1OHnFk',
		};

		await addRecommendation(body);
		const increased = await decreaseScore(id);
		const result = await connection.query(
			`SELECT * FROM recommendations WHERE id = $1`,
			[id]
		);

		expect(increased.status).toBe(200);
		expect(result.rows[0].score).toBe(0);
	});
});
