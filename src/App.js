import './App.css';
import RegisterPage from './components/register';
import LoginPage from './components/login';
import {BrowserRouter, Route, Routes} from "react-router-dom"

// const express = require('express')
// const mysql = require('mysql')
// // const path = require('path')
// // const hbs = require('hbs')
// const app = express();

// const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"root",
//   database:"userdb"
// });

// db.connect((err) => {
//   if (err){
//     console.log(err);
//   }
//   else{
//     console.log("mysql connection sucess");
//   }
// })

// app.use(express.static(location));
// // app.set('view engine','hbs');
// app.listen(3000,()=>{
//   console.log("server started @ port 3000");
// })

function App(app) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      </BrowserRouter>
    </div>

    
  )
}

export default App;
