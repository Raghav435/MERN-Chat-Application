const router = require("express").Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/User.controller");
const auth = require("../middlewares/AuthMiddlewares");

router.route("/").post(registerUser).get(auth, allUsers);
router.route("/login").post(loginUser);
module.exports = router;
