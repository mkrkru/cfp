const fs = require("fs");
const { join } = require("path");
const app = (request, response) => require('serve-handler')(request, response, { public: "build" });

require('https')
    .createServer({
        cert: fs.readFileSync(join(__dirname, "certs", "certificate.crt")),
        key: fs.readFileSync(join(__dirname, "certs", "private.key")),
        ca: fs.readFileSync(join(__dirname, "certs", "certificate_ca.crt"))
    }, app)
    .listen(443, () => console.log('Running at https://localhost'));

/* require('http')
    .createServer(app)
    .listen(80, () => console.log('Running at http://localhost')); */