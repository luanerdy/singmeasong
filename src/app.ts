import { customExpress } from './config/customExpress';
import { controllers } from './controllers/controllers';

const app = customExpress();
controllers(app);

export { app };
