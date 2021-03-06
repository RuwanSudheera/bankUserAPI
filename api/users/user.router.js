const { 
    getUserByUserId, 
    getUsers,
    login
 } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);

module.exports = router;