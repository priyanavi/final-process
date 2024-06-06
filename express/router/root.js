const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'files', 'index.html'));
});
router.get('/new-file(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..','files', 'new-file.html'));

    }); 

router.get('/old-file(.html)?', (req, res) => {
    res.redirect (301,'new-file.html')                                                                                                                                                                                                                                      (301, 'new-file.html');
});

module.exports = router
