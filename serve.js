require('http')
    .createServer((request, response) =>
        require('serve-handler')(request, response, { public: "build" }))
    .listen(443, () =>
        console.log('Running at http://localhost:443'));