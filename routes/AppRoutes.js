const AppRouter = require('express').Router();
const MealTypeController = require('../controller/MealTypeController');
const RestaurantController = require('../controller/RestaurantController');
const UserController = require('../controller/UserController');
const LocationController = require('../controller/locationController');

AppRouter.get('/', UserController.userHome);
AppRouter.get("/get-user-list/:gender", UserController.getUserList);
AppRouter.get('/get-location-list',LocationController.getLocationList);
AppRouter.get("/get-restaurant-list-by-loc-id/:loc_id", RestaurantController.getRestaurantListByLocation);
AppRouter.get('/get-Meal-Type-List',MealTypeController.getMealTypeList);

AppRouter.get('/get-restaurant-details/:rest_id',RestaurantController.getSingleRestaurantDetails);
AppRouter.get('/get-menu-item-list/:r_id',RestaurantController.getMenuItems);


//save data
AppRouter.post("/save-user-data", UserController.saveUserData);
AppRouter.post("/login", UserController.userLogin);
AppRouter.post('/filter', RestaurantController.filter);

module.exports = AppRouter;

