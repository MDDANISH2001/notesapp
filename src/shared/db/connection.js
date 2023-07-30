//how to connect with database
import mongoose from 'mongoose';

//creating a middleware
export function createConnection(){
const promise = mongoose.connect(process.env.DBURL, {maxPoolSize:5});
promise.then(data =>{
    console.log('Connection Created....');
    // next();
}).catch((err) =>{
    console.log('Error occured in connections',err);
    throw err;
});
}

// export default mongoose;