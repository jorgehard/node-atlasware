import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
//Routes
import companyRoutes from './routes/company';

const app = express();
createConnection();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(companyRoutes);

app.listen(3333, () => console.log('Server in port 3333'));
