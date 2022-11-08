const router = require("express").Router();
const {
  addNewNotification,
  deleteNotification,
  getNotification,
} = require("../controllers/Notification.controller");
const auth = require("../middlewares/AuthMiddlewares");

router.route("/").post(auth, addNewNotification).get(auth, getNotification);
router.route("/:notificationId").delete(auth, deleteNotification);

module.exports = router;
