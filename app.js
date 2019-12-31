const express = require('express');

const app = express();


app.get('/', (req, res) => {
    
  res.send(
    "this is the node app"
  )
})

const PORT = process.env.PORT || 3000;
console.log('process', process.evn)
app.listen(PORT, () => {
  console.log('listning')
});