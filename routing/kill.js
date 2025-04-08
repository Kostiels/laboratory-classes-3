const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

router.get("/", (_request, _response) => {
  logger.getProcessLog();
  process.exit();
});

module.exports = router;