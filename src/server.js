// Docker Build ==> docker build -t node-docker .
// Docker run ==> docker run -p 3000-3000:9000 -d node-docker
const app = require('./app');

async function main() {
    await app.listen(9000);
    console.log('Server is running 9000')
}

main();
