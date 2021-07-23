import { Request, Response } from 'express';
import { decreaseScore } from '../../repositories/recommendations/decreaseScore';

const downvoteRecommendation = async (req: Request, res: Response) => {
	const id = Number(req.params.id);

	if (id === NaN || id <= 0) {
		return res.sendStatus(400);
	}

	try {
		const decreased = await decreaseScore(id);
        if(!decreased) return res.sendStatus(404);

		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
};

export { downvoteRecommendation };
