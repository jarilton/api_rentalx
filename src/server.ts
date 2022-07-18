import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({message: "Desenvolvimento da api"})
})

app.listen(3333, () => console.log("Server is running!"))