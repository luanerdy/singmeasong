import { Express } from 'express';
import { addRecommendation } from './addRecommendation';
import { downvoteRecommendation } from './downvoteRecommendation';
import { upvoteRecommendation } from './upvoteRecommendation';


const recommendations = (app: Express) => {
	app.post('/recommendations', addRecommendation);
	app.post('/recommendations/:id/upvote', upvoteRecommendation);
	app.post('/recommendations/:id/downvote', downvoteRecommendation);
};

export { recommendations };
