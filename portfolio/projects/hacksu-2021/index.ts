import express from 'express';

const app = express();
export default app;


let dist = `${__dirname}/.repo/dist`;
let index = require('path').resolve(`${dist}/index.html`);
let serve = express.static(dist);
app.use(serve, (req, res, next) => {
    res.sendFile(index);
});

