
import path from "path";
const __dirname = import.meta.dirname;


// Setup empty JS object to act as endpoint for all routes
let projectData = {
  date: 'test',
  place: 'test',
  temperature: 'test',
  feelings: 'test'
};

let results = [];

// Require Express to run server and routes
import express from "express";
import cors from "cors";

// Start up an instance of app

const app = express();
const port = 3010;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded());
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static(path.resolve(__dirname,'../dist')));

app.get('/test',(req,res)=>{
  res.send('Success!');
})

function setProjectData(receivedData) {
  
  projectData = receivedData;
  results = [projectData, ...results];
  // projectData.date = receivedData.date;
  // projectData.place = receivedData.place;
  // projectData.temperature = receivedData.temperature;
  // projectData.user_feeling = receivedData.user_feeling;
}


app.get('/all', (req,res)=>{
console.log(`inside /all ${results[0].place}`)
  res.send(results);
})

app.post('/setData', (req,res)=>{
  try {
    const receivedData = req.body;
    if (!receivedData) {throw new Error('Nenhum conteúdo foi recebido')}
    if (Object.keys(receivedData).length !== 4) {throw new Error('Dado incorreto enviado')}
    
    //Em caso de passar pelos testes de erro:
    setProjectData(receivedData);
    res.send({success:true, message: 'dados recebidos corretamente'}); 
  } catch (error) {
    console.log(error);
    res.status(400).send({success:false, message: error.message});
  }
})

// Setup Server
app.listen(port, ()=>{
  console.log(`server up on port ${port}`);
})