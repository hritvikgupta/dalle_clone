import express from "express";
import * as dotenv from "dotenv";
import OpenAI from 'openai';

dotenv.config()

const router = express.Router()

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY // This is also the default, can be omitted
});

router.route("/").get(async (req, res)=>{
    res.send("hello from open api")
});

router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        const image = aiResponse.data[0].url;
        // console.log(image)
        res.status(200).json({photo: image });
    } catch (err) {
        console.log(err);
        const errorMessage = err?.response?.data?.error?.message || "An unknown error occurred";
        res.status(500).send(errorMessage);
    }
});

export default router;
