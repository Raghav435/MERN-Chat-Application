const router = require("express").Router();
const auth = require("../middlewares/AuthMiddlewares");
const {
  sendMessage,
  fetchMessage,
} = require("../controllers/Message.controllers");

// Route to send the message to the recipient
router.route("/").post(auth, sendMessage);
// Route to retrieve all the message
router.route("/:chatId").get(auth, fetchMessage);

module.exports = router;
