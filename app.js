import express from 'express';
import chalk from 'chalk';
import dontenv from 'dotenv';
import cors from 'cors';
import noteRoutes from './src/modules/notes/routes/notes-routes.js';
import { createConnection } from './src/shared/db/connection.js';

// const app = express();

dontenv.config(); //read .env file and load env variables in process.env
const app = express(); //call the express funciton and get the app function
app.use(cors());
app.use(express.static("build"))
app.use(express.json());
//attach route as a middleware
app.use('/', noteRoutes);
console.log('After middlewares');
const server = app.listen(process.env.PORT || 1235, (err) =>{
    if(err){
        console.log(chalk .red.bold("Server Crash"), err);
    }   
    else{
        console.log(chalk.green.bold("server up and running"), server.address().port);
        createConnection();
    }
})