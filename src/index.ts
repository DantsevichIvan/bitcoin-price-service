import express from 'express';
import cors from 'cors';

import { config } from './config';
import routes from './api/routes';
import { startAllJobs } from './jobs';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
  startAllJobs();
});
