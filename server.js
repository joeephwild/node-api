var https = require("https");

var options = {
  "method": "GET",
  "hostname": "rest.cryptoapis.io",
  "path": "/v2/blockchain-data/ethereum/goerli/addresses/0xF9A62F23d5ec2413d26275FD0Ab72CABaE7bA2a3/balance",
  "qs": {"context":"yourExampleString"},
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "78d5cff507c4fe16dd1a20cc0686c6347403e5ff"
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();