const config = require("config");
const domain = config.get("domain.url")

module.exports.domain = "http://localhost:3000" || domain