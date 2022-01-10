const fs = require("fs");
const { join } = require("path");

require('https')
    .createServer({
        cert: fs.readFileSync(join(__dirname, "certs", "certificate.crt")),
        key: fs.readFileSync(join(__dirname, "certs", "private.key")),
        ca: fs.readFileSync(join(__dirname, "certs", "certificate_ca.crt"))
    }, (request, response) => require('serve-handler')(request, response, { public: "build" }))
    .listen(443, () => console.log('Running at https://localhost'));

require('http')
    .createServer((request, response) => require('serve-handler')(request, response, { redirects: [
            { "source": "http://cryptofryingpans.com", "destination": "https://cryptofryingpans.com" }
        ] }))
    .listen(80, () => console.log('Running at http://localhost'));