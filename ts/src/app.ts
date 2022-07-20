import express = require("express");
import morgan = require("morgan");
import cors = require("cors");
import helmet from "helmet";

import "dotenv/config";

import {notFound, errorHandler} from "./middlewares";
import {Express} from "express/ts4.0";
import {router as api} from "./api";

export const app: Express = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello ✨👋🌎🌍🌏✨'
    });
});

app.use('/api', api);

app.use(notFound);
app.use(errorHandler);