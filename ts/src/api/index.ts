import {Router} from "express";

import {router as emojis} from "./emojis";

export const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏'
    });
});

router.use('/emojis', emojis);