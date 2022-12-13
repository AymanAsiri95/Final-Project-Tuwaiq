import express from 'express';
import { connectDB } from './config/db';
import authRouter from './routes/auth_route';
import buildRouter from './routes/building_route'
import 'dotenv/config';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(cors());

connectDB();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/', buildRouter);
app.use('/api/v1/auth/register', authRouter);

app.use((req, res, next) => {
  return res.sendFile(path.join(__dirname, '..', 'client', 'build/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running in port 5000');
});