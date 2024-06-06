const express = require('express')
const router = express.Router()
const path = require('path')

const employeController=require('../../controllers/employeController')
// data = {}
// data.employe = require('../../data/employe.json')
router.route('/')
    // .get((req,res ) => {
    //     res.json(data.employe)
    // })
    .get(employeController.getAllEmploye)
    // .post((req,res) =>{
    //     res.json({
    //         "firstName":req.body.firstname,
    //         "lastName":req.body.lastname
    //     })
    // })
    .post(employeController.createNewEmploye)
    // .put((req,res) =>{
    //     res.json({
    //         "firstName":req.body.firstname,
    //         "lastName":req.body.lastname
    //     })
    // })
    // .delete((req,res) =>{
    //     res.json({
    //         "id":req.body.id
    // })
    // })
    .put(employeController.updateNewEmploye)
    .delete(employeController.deleteEmploye)
router.route("/:id")
//    .get((req,res)=>{
//       res.json({"id":req.params.id})
//    }) 
     .get(employeController.getEmploye)
module.exports = router    

