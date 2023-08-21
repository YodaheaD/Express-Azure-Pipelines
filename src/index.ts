import express, { Express, Request, Response } from 'express';
import cors from "cors";
import Logger from './utils/logger';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app:Express = express();


import { router as pageRouter } from './page';

app.use(express.static('public'));
//const PORT = process.env.PORT;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/page', pageRouter);

app.get('/', (req:Request, res:Response) => {
    res.send("Hello from Express Api")
})

app.listen(8080, () => {
    Logger.info(`Server running on port  8080`);
 })