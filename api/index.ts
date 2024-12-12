import express from "express";
import fs = require("fs");
import cors from "cors";
import publicationsRouter from "./routers/publications";
import filePublication from "./filePublication";

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/publications', publicationsRouter);

const run = async () => {

    if (fs.existsSync('./publications.json')) {
        await filePublication.init();
    } else {
        fs.writeFileSync('./publications.json', JSON.stringify([]));
    }

    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    });
}

run().catch(err => console.error(err));