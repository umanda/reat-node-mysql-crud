import express, { request }  from "express";
import mysql from 'mysql';
import cors from 'cors';


const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "react-node-mysql-crud",
});


// Middleware for send json to server from client
app.use(express.json());

// Middleware for accept cors
app.use(cors());

app.get('/',(req,res) =>{
    res.json("Home")
});

app.get('/books',(req,res) =>{
    const q = "SELECT * FROM `books`";
    db.query(q,(err,data)=>{
        if(err) {
            return res.json('error');
        } else{
            return res.json(data);
        }
    })
});


app.post('/books',(req,res) =>{
    const q = "INSERT INTO `books` (`title`, `description`, `cover`,`price`) VALUES (?);";

    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
    ];
    db.query(q,[values],(err,data)=>{
        if(err) {
            return res.json('error');
        } else{
            return res.json('Book has been created');
        }
    })
});

app.delete('/books/:id',(req,res)=>{
    const bookId = req.params.id;

    const q = "DELETE FROM books WHERE id = ?";
    db.query(q,[bookId],(err,data)=>{
        if(err) {
            return res.json('error');
        } else{
            return res.json('Book has been deleted');
        }
    })

})

app.put('/books/:id',(req,res)=>{
    const bookId = req.params.id;

    const q = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?,`price` = ? WHERE id = ?";
    
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
    ];
    
    db.query(q,[...values,bookId],(err,data)=>{
        if(err) {
            return res.json(err);
        } else{
            return res.json('Book has been updated');
        }
    })

})

app.listen(8800, ()=>{
    console.log("Connected to backend server!")
});