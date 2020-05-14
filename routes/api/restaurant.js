const router = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");

// Matches with "/api/restaurant"
router
  .route("/")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

// Matches with "/api/restaurant/:id"
router
  .route("/:id")
  .get(restaurantController.findById)
  .put(restaurantController.update)
  .delete(restaurantController.remove);

module.exports = router;
