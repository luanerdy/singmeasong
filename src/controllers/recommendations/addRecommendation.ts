import { Request, Response } from 'express';
import { existsRecommendation } from '../../repositories/recommendations/existsRecommendation';
import { insertRecommendation } from '../../repositories/recommendations/insertRecommendation';
import { validateRecommendation } from '../../services/recommendations/validateRecommendation';

const addRecommendation = async (req: Request, res: Response) => {
	const { name, youtubeLink } = req.body;

	if (!validateRecommendation(name, youtubeLink)) {
		return res.sendStatus(400);
	}

	try {
		const exists = await existsRecommendation(youtubeLink);
		if (exists) return res.sendStatus(409);

		await insertRecommendation(name, youtubeLink);
		res.sendStatus(201);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};

export { addRecommendation };
