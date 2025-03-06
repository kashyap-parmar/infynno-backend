const { Router } = require('express')

// ------------------------------------------------

const router = Router();

router.get('/', (req,res) => { console.log('called'); res.send('ok') })

// ------------------------------------------------

module.exports = router;