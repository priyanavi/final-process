const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'files','subdir', 'index.html'));
});

router.get('/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'files','subdir', 'test.html'));
}); 

module.exports = router