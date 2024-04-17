const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient().User;

// getallUser

const getallUser = async (req,res) =>{
    try{
        res.send({message:'Hello I am server'});
    }catch(e){
        console.log(e)
    }
};
module.exports = getallUser;
//getUserById

//creatUser

//updateUser

//DeleteUser