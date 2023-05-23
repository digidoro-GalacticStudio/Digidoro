const jwt = require("jsonwebtoken");
const debug = require("debug")("digidoro:jwt");

const secret = process.env.TOKEN_SECRET || "DigidoroSecret";
const expTime = process.env.TOKEN_EXP || "";

const tools = {};

tools.generateToken = (_id)=>{
    return expTime ? jwt.sign( {userID: _id}, secret, {expiresIn: expTime}) : jwt.sign( {userID: _id}, secret);
}

tools.verifyToken = (token)=>{
    try{
        return jwt.verify(token, secret);
    }
    catch(error){
        return false;
    }
}

module.exports = tools;