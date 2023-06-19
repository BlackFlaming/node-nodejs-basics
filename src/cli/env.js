const parseEnv = () => {
    const envKeys = Object.keys(process.env);
    let rssKeys = envKeys.filter(key => key.includes("RSS_"));
    let output = [];

    rssKeys.forEach(key => {
        output.push(`${key}=${process.env[key]}`)
    })

    console.log(output.join("; "))
};

parseEnv();