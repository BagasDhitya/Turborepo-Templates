import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 API is running on Vercel!");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express API!" });
});

export const handler = serverless(app);
export default handler;
