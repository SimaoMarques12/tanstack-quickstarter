import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';

const app = express();

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
