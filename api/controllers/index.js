const express = require('express');
const router = express.Router();
const authController = require('./auth.js');
const postsController = require('./posts.js');
const jobsController = require('./jobs.js');
// const usersController = require('./users.js');
const appConfigController = require('./appConfig.js');
const categoriesController = require('./categories.js');
// Load each controller
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/jobs', jobsController);
router.use('/posts', postsController);
router.use('/categories', categoriesController);
router.use('/application-configuration', appConfigController);

module.exports = router;