import express from 'express';
import filePublication from "../filePublication";
import {IPublication} from "../types";
import {imagesUpload} from "../multer";

const publicationsRouter = express.Router();

publicationsRouter.get("/", async (_req, res) => {
    const publications = await filePublication.getPublications();
    res.send(publications);
});

publicationsRouter.post("/", imagesUpload.single('image'), async (req, res) => {

    if (!req.body.message) {
        res.status(400).send({error: 'Please send a message'});
        return;
    }

    let author = '';

    if (!req.body.author) {
        author = 'Anonymous'
    } else {
        author = req.body.author;
    }

    const publication: IPublication = {
        author: author,
        message: req.body.message,
        image: req.file ? 'images' + req.file.filename : null,
    };

    const savedPublication = await filePublication.postPublication(publication);
    res.send(savedPublication);

});

export default publicationsRouter;