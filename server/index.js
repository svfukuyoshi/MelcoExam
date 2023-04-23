const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
const userRouter = require('./routes/user');

app.use(userRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to server' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})