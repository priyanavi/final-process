const express=require('express')
const { getAllEmployees, updateEmployee, createNewEmployee, deleteEmployee, getEmployee } = require('../../controller/employeeController')
const router=express.Router()
router.use(express.json())

router.route('/')
.get(getAllEmployees)
.put(updateEmployee)
.post(createNewEmployee)
.delete(deleteEmployee)
router.route('/:id')
.get(getEmployee)






module.exports=router