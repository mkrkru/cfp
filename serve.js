const fs = require("fs");

require('https')
    .createServer({
        key: fs.readFileSync('certs/private.key'),
        cert: fs.readFileSync('certs/certificate.crt')
    }, (request, response) =>
        require('serve-handler')(request, response, { public: "build" }))
    .listen(443, () =>
        console.log('Running at http://localhost:443'));