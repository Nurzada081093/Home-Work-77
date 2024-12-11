import {promises as fs} from 'fs';
import {IPublication} from "./types";

const fileName = './publications.json';
let publications: IPublication[] = [];

const filePublication = {
    async init() {
        try {
            const fileContent = await fs.readFile(fileName);
            publications = JSON.parse(fileContent.toString()) as IPublication[];
        } catch (e) {
            console.log(e);
        }
    },

    async getPublications() {
        return publications;
    },

    async postPublication(publication: IPublication) {
        const userPublication = {
            ...publication,
        };
        publications.push(userPublication);
        await this.savePublications();
        return userPublication;
    },

    async savePublications() {
        return fs.writeFile(fileName, JSON.stringify(publications));
    }
}

export default filePublication;