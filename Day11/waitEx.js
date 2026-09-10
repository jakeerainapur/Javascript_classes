function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done!");
        }, 2000);
    });
}

async function test() {
    console.log("Start");

    let result = await wait();

    console.log(result);
    console.log("End");
}

test();