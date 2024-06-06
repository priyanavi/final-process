const userDB={
    user:require('../model/users.json'),
    setUser:function (data) {this.user=data}
}
const path=require('path')
const bcrypt=require('bcrypt')
const fspromises=require('fs').promises
const handleNewUser=async(req,res)=>{
    const {user,pass}=req.body

}