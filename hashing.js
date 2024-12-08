const crypto = require('crypto');

const input = "596138";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)