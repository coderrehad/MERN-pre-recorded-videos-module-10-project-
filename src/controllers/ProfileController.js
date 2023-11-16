const ProfileModel = require('../models/ProfileModel');

//C = Create
exports.CreateProfile= async (req,res)=> {
    try {
        let reqBody = req.body;
        let result=await ProfileModel.create(reqBody);
        res.status(200).json(
            {
                status:"success",
                data:result
            }
        )
    }catch (e) {
        res.status(404).json(
            {
                status:"fail",
                data:e.toString()
            }
        )
    }
}


exports.UserLogin = async (req,res)=>{
    try{
        let UserName = req.body['UserName'];
        let Password = req.body['Password'];
        let projection = "UserName Password";
        let result = await ProfileModel.find({UserName,Password});
        res.status(201).json({
            status: "Success",
            data: result
        })
    }catch (err){
        res.status(404).json({
            status: "fail",
            data: err.toString()
        })
    }
}
