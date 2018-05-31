var dbUrl="mangodb://ec2-52-34-164-92.us-west-2.compute.amazonaws.com:27017/";
var db="2FocusDB";

exports.getDbUrl=function(){
    return this.dbUrl;
}

exports.getDatabaseName=function(){

    return this.db;
}