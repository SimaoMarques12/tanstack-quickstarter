import cors from 'cors';
import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { fromNodeHeaders, toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { requireAuth } from './middlewares/requireAuth';
import loggerMiddleware from './middlewares/logger';

const app = express();

app.use(
  cors({
    origin: 'http://http://localhost:3000', // Replace with your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.use(loggerMiddleware());

// Routes
app.get('/api/me', async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

app.use('/api/items', requireAuth, itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
