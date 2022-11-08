const router = require("express").Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/Chat.controller");
const auth = require("../middlewares/AuthMiddlewares");

router.route("/").post(auth, accessChat).get(auth, fetchChats);

router.route("/group").post(auth, createGroupChat);

router.route("/grouprename").put(auth, renameGroup);

router.route("/groupremove").put(auth, removeFromGroup);

router.route("/groupadd").put(auth, addToGroup);

module.exports = router;
