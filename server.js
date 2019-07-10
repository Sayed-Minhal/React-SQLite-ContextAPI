const app = require('express')();
const path = require('path');
const cors = require('cors');
const sqlite= require('sqlite');
const port = process.env.PORT || 3030;

const dbPromise = sqlite.open('./data/chinook.db')

app.use(cors());

app.get('/api/data', async function(req, res, next){
  try {
    const db = await dbPromise;
    const [post, categories] = await Promise.all([
      db.all('SELECT * FROM albums WHERE artistid = ?', 22),
      db.all('SELECT * FROM employees')
    ]);
    res.status(200).send({ post, categories });
  } catch (err) {
    next(err);
  }
})

app.listen(port,function(err){
	console.log("App is listening on Port ::",port);
});