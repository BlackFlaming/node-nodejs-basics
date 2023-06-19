import stream from "stream"

const transform = async () => {
    const reverser = new stream.Transform({
        transform(chunk, encoding, callback) {
            const chunkAsString = chunk.toString();
            let stringToReturn = "";

            for (let index = chunkAsString.length-1; index > -1; index--) {
                stringToReturn += chunkAsString[index];
            }
            this.push(stringToReturn);
            callback();
        }
    })
    process.stdin.pipe(reverser).pipe(process.stdout);
};

await transform();