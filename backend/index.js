const app=require("./server");
const connection=require("./connection");
const port=process.env.PORT||3000;
app.listen(port,()=>{
	console.log("application is running on the http://127.0.0.1:3000");
})