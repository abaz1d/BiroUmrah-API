var express = require('express');
var router = express.Router();
const { Response } = require('../helpers/util')

/* GET users listing. */
module.exports = function (db) {

  router.get('/', async function (req, res, next) {
    try {
      db.query('SELECT * FROM produk;', (err, rows) => {
        if (err) res.status(500).json(new Response(err.toString(), false))
        res.json(new Response(rows));
      })
    } catch (error) {
      res.status(500).json(new Response(error.toString(), false))
    }
  });

  return router;
}
