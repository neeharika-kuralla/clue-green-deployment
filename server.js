import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "v1";

app.get("/", (req, res) => {
    res.send(`
        <h1>Blue-Green Deployment</h1>
        <h2>Application Version: ${VERSION}</h2>
        <p>Running on port: ${PORT}</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});