const express = require('express');
const router = express.Router();

// This is just a stub; you can later replace it with real user logic.
router.get('/', (req, res) => {
  res.json({ message: 'User route works' });
});

module.exports = router;