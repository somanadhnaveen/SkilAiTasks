const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/',function(req,res){
    let text = req.body.text
    console.log(text)
    if(text == 'Hi')
    {
        res.send('Hello World')
    }
})

app.listen(3000, function(){
    console.log('Started running using port 3000')
})
