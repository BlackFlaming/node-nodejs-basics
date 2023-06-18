import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const newPath = path.join(__dirname, "files", "properFilename.md");
    const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
   
    fs.exists(newPath, function (error) { 
        if (!error) {
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    throw "FS operation failed"
                }
            });
        }
        else {
            console.log("FS operation failed")
        }
    })
    
};

await rename();