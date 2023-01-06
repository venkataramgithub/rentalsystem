const express=require("express");
const connection=require("../connection");
const router=express.Router();

router.post("/rentalregister",(req,res)=>{
	const {status,name,phno,gender,email,password} =req.body;
	connection.query("select * from registration where email=?",[email],(error,result)=>{
		if(error){}
		else{
			if(result.length>0){
				res.send({
					message:"email already exist",
					result:result
				});
			}
			else{
				connection.query("insert into registration set?",req.body,(error,result)=>{
					if(error){
						res.send({
							error:error
						});
					}
					else{
						res.send({
							message:"data submitted successfully",
							result:result
						});
					}
				});
			}
		}
	});
});
router.post("/logining",(req,res)=>{
	const {email,password}=req.body;
	connection.query("select * from registration where email=? and password=?",[email,password],(err,result)=>{
		if(err){
			res.json({message:"Entered details are incorrect or user does not exist"
			});
		}
		else{
			connection.query("update registration set status=? where email=?",["active",email],(err,result)=>{
				if(err){
					res.json({
						message:"status updation is failed"
					});
				}
				else{
					res.json({
						message:"login successfully"
					});
					console.log("login successfully");
				}
			});
		}
	});
});


module.exports=router;
