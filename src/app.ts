import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/auths.routes';
import productRoutes from './routes/products.routes';

dotenv.config();

const app: Application = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3000);

// Middlewares...
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes...
app.use('/zodtest/auths', indexRoutes);
app.use('/zodtest/products', productRoutes);

export default app;
