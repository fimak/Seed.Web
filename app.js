const { createServer } = require("https");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || (dev ? 'localhost' : 'https://brave-field-0814c320f.2.azurestaticapps.net');
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const options = {
    minVersion: "TLSv1.2"
}
if (dev) {
    const fs = require('fs');
    options.key = fs.readFileSync('anhc.key');
    options.cert = fs.readFileSync('anhc.crt');
}
else {
    options.ciphers = "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256";
}
app.prepare().then(() => {
    createServer(options, (req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on https://localhost:${port}`);
    });
});