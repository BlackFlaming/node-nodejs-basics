import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    try {
        fs.writeFile(path.join(__dirname, "files", "fresh.txt"), "I am fresh and young", {
            flag: 'wx'
        }, (err) => {
            if (err) throw "FS operation failed";
        })
    }
    catch (err) {
        console.log(err);
    }
    
};

await create();