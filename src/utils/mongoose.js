module.exports ={
    multipleMongooseToObject:(mongooseArray)=>{
        return mongooseArray.map(mongooseArray=>mongooseArray.toObject());
    },
    MongooseToObject:(mongoose)=>{
        return mongoose?mongoose.toObject():mongoose;
    }
};