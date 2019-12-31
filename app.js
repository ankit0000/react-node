const express = require('express');

const app = express();


app.get('/', (req, res) => {
    
  res.send(
    "this is the node app"
  )
})
console.log('process', process.evn)
app.listen(3000, () => {
  console.log('listning')
});