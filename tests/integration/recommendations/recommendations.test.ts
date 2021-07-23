import { connection } from '../../../src/config/connection';
import { addRecommendation } from './addRecomendation';

afterAll(async () => {
	connection.end();
});

beforeEach(async () => {
	await connection.query('TRUNCATE recommendations RESTART IDENTITY');
});

describe('POST /recommendations', () => {
	it('should return status 400 for invalid body', async () => {
		const body = {
			name: '',
			youtubeLink: ''
		};

		const recommendation = await addRecommendation(body);

		expect(recommendation.status).toBe(400);
	});

	it('should return status 409 for existing recommendation', async () => {
		const body = {
			name: 'Tareco e mariola',
			youtubeLink: 'https://www.youtube.com/watch?v=zF9f_1OHnFk'
		};

		await addRecommendation(body);
		const recommendation = await addRecommendation(body);

		expect(recommendation.status).toBe(409);
	});

	it('should return status 201 and add a recommendation for valid body', async () => {
		const body = {
			name: 'Tareco e mariola',
			youtubeLink: 'https://www.youtube.com/watch?v=zF9f_1OHnFk'
		};

		const recommendation = await addRecommendation(body);
		const selectRecommendations = await connection.query(
			`SELECT * FROM recommendations`
		);

		expect(recommendation.status).toBe(201);
		expect(selectRecommendations.rowCount).toBe(1);
	});
});
