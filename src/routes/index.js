const { Router } = require("express");
const exRouter = require('./example');
const userRouter = require('./user')


const mainRouter = Router();

mainRouter.use('/mongo', exRouter);
mainRouter.use('/user', userRouter);


module.exports = mainRouter;