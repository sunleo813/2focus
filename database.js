var mongoclient=require('mongodb').MongoClient;
var assert=require('assert');


var connect=function(databaseUrl, callback){
    
    mongoclient.connect(databaseUrl, function(error, database){
    assert.equal(null,error);
    console.log("Successfully connected to MongoDB instance");
    callback(database);
    });
};

exports.find = function(databaseName, collectionName, query, cb){
    connect(databaseName,function(database){
        var dbo=database.db(databaseName);
       dbo.collection(collectionName).find(query).toArray(function(err, documents){;
        // collection.find(query).toArray(function(err, documents){
                assert.equal(err, null);
                console.log("MongoDB returned documents to client: ");
                //console.dir(documents);
                cb(null,documents);
                database.close();
            });
        });
    };
 
    exports.insert = function(databaseName, collectionName, recordInfo, cb){
        connect(databaseName, function(database){
            var dbo = database.db(databaseName);
            dbo.collection(collectionName).insert(recordInfo, function(err, result){
                assert.equal(err, null);
                console.log('MongoDB insert one record');
                cb(null, result);
                database.close();
            });
        })
    }