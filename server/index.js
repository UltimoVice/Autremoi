const express = require('express') 
const products = require('./products.json') 

const app = express()
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome to autremoi server");
});

app.get("/products", (req, res) => {
  res.json(products);
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
