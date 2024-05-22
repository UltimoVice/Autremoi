// const express = require("express");
// const products = require("./products.json");
// const users = require("./users.json");
// const cors = require("cors");
// import {login} from "./controllers/users.js"
import express from "express"
import products from "./products.json" assert{type: "json"}
import users from "./users.json" assert{type: "json"}
import cors from "cors"


const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // Questa opzione permette l'invio di credenziali
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("Welcome to autremoi server");
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});



//
const secretKey = process.env.SECRET

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

// app.post("/api/users/login", login)



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const products = require("./products.json");
// const users = require("./users.json");
// const cors = require("cors");
// require('dotenv').config(); // Assicurati di caricare le variabili d'ambiente

// const app = express();
// const port = 3000;

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   credentials: true, // Questa opzione permette l'invio di credenziali
// };

// app.use(express.json());
// app.use(cors(corsOptions));

// // Carica la chiave segreta dalle variabili d'ambiente
// const secretKey = process.env.SECRET;

// // Rotte pubbliche
// app.get("/", (req, res) => {
//   res.json("Welcome to autremoi server");
// });

// app.get("/products", (req, res) => {
//   res.status(200).json(products);
// });

// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// // Funzione di autenticazione per proteggere le rotte
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, secretKey, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// // Rotta protetta
// app.get('/protected', authenticateToken, (req, res) => {
//   res.send('This is a protected route');
// });

// // Rotta di login
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Verifica delle credenziali
//   const user = users.find(u => u.username === username && u.password === password);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Generazione del token JWT
//   const accessToken = jwt.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: '1h' });
//   res.json({ accessToken });
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

