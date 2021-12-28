const fs = require("fs");
const app = (request, response) => require('serve-handler')(request, response, { public: "build" });

require('https')
    .createServer({
        key: fs.readFileSync('./certs/private.key'),
        cert: fs.readFileSync('./certs/certificate.crt'),
        ca: fs.readFileSync('./certs/ca_bundle.crt')
    }, app)
    .listen(443, () => console.log('Running at https://localhost'));

require('http')
    .createServer(app)
    .listen(80, () => console.log('Running at http://localhost'));