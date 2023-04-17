import express from 'express';
const port = process.env.port || 8000;
const app = express();
app.get("/", (req, res) => {
    res.send('yooo world!');
});
app.listen(port, () => {
    console.log(`now listening to ${port}`);
});
//# sourceMappingURL=app.js.map