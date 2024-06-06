
data = {}
data.employe = require('../model/employe.json')

const getAllEmploye=(req,res ) => {
    res.json(data.employe)
}
const createNewEmploye =(req,res) =>{
    res.json({
        "firstName":req.body.firstname,
        "lastName":req.body.lastname
    })
}
const updateNewEmploye =(req,res) =>{
    res.json({
        "firstName":req.body.firstname,
        "lastName":req.body.lastname
    })
}
const deleteEmploye =(req,res) =>{
    res.json({
        "id":req.body.id
})
}
const getEmploye=(req,res)=>{
    res.json({"id":req.body.id})
 }
module.exports={
    getAllEmploye,createNewEmploye,updateNewEmploye,deleteEmploye ,getEmploye
}