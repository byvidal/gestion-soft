import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import userRoutes from "./routers/user.routes.js";
import subjectRoutes from "./routers/subject.routes.js"; 

import cors from "cors";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 

app.use(cors({
    origin: 'http://localhost:5173',
    credencials:true
}));

app.use("/api", userRoutes);
app.use(subjectRoutes); 

export default app;