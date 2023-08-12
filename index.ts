import express, { Express, Request, Response } from 'express';
import cors from "cors";
import { pageRouter } from './src/page';
import Logger from './src/utils/logger';
import dotenv from 'dotenv';
dotenv.config();
const app:Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/page', pageRouter);

app.get('/', (req:Request, res:Response) => {
    res.send("Hello from Express Api")
})

app.listen(PORT, () => {
    Logger.info(`Server running on port ${PORT}`);
 })