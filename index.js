
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'GET OK'});
})

app.post('/test', (req, res) => {
  res.status(200).json({ message: 'POST OK'});
})

app.put('/test', (req, res) => {
  res.status(200).json({ message: 'PUT OK'});
})

app.patch('/test', (req, res) => {
  res.status(200).json({ message: 'PATCH OK'});
})
  
app.delete('/test', (req, res) => {
  res.status(200).json({ message: 'DELETE OK'});
})


with(Test=function(){
    // выполняем иные конструктивные действия
    alert("Constructor: x="+this.x+", y="+this.y+", sum="+this.sum());
}){
    // объявляем и инициализируем свойства
    prototype.x=5;
    prototype.y=3;
    // объявляем методы
    prototype.sum=function(){
        return this.x+this.y;
    }
}

//
http.createServer(app).listen(3000, () => {
  console.log('Server is working on port 3000');
})





