const parseArgs = () => {
    const args = process.argv.slice(2);
    let output = [];

    for (let index = 0; index < args.length; index += 2) {
        output.push(`${args[index]} is ${args[index + 1]}`);
    }

    console.log(output.join(", "));
};

parseArgs();