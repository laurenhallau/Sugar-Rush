const router = require("express").Router();
const cartRoutes = require("./cart");
const restaurantRoutes = require("./restaurant");

router.use("/cart", cartRoutes);
router.use("/restaurant", restaurantRoutes);

module.exports = router;
