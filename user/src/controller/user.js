const User = require("../model/user")
const {	StatusCodes } = require('http-status-codes')
const {sign, verify} = require("../utils/jwt")

exports.CreateUser = async(request, response)=>{
    try {
        const user = new User({...request.body})
        response
                .status(StatusCodes.OK).json({user})
       
    } catch (err) { 
        response
                .status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
    }
}

exports.login = async(req, response)=>{
    try {
        const {phone, password} = req.body

        if(!phone && !password)
                response
                        .status(StatusCodes.BAD_REQUEST).json({message: "phone or password error"})
                        
        const user = await User.findOne({phone:phone}) 

        const token = { data: await sign(req.body)}

        if(user)
                response
                        .status(StatusCodes.OK).json({
                            token
                        })
               
        else{
              response
                      .status(StatusCodes.NOT_FOUND).json({message: "Not Found"})
        }
    } catch (error) {
        response
                .status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"})
    }
}