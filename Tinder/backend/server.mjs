import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbCards.mjs";
import Cors from 'cors'

//App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:passwordpassword@cluster0.eehha.mongodb.net/owners?retryWrites=true&w=majority'

// Middleware
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url,{ 
});

//Api Endpoints
app.get('/', (req,res) => res.status(200).send('hello world!'));

app.post("/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

app.get("/cards", (req, res) => {
    Cards.find((err, data) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});


//Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));