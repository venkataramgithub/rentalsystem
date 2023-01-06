const mysql=require("mysql");
const connection=mysql.createConnection({
	host:"localhost",
	port:"3306",
	user:"root",
	password:"",
	database:"rentalsystem"
});
connection.connect((err)=>{
	if(err){
		console.log("database is not connected");
	}
	else{
		console.log("database connected successfully");
	}
});
module.exports=connection;