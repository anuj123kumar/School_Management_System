const express = require('express')
const router = express.Router()

const { getStudents,  createStudents, deleteStudent} = require('../controller/student')

//pARAM


router.get('/', getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);


module.exports = router