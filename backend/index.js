var http = require('http');
const express = require('express');

//passport-twitter用
var session = require('express-session')
var auth = require('./passport');
var passport = auth.passport;

//ルーティングファイルを指定
var routes = require('./routes');
const app = express();
const server = http.createServer(app);

const path = require('path');
const port = process.env.PORT || 3001

//passport-twitter用
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:'anraku',resave:true,saveUninitialized:true}));

//静的ファイルのルートディレクトリを指定
app.use(express.static(path.join(__dirname,'../frontend/build')));

//ルーティングを指定
routes.configRoutes(app,server,passport);

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/api',(req,res) => {
    res.json({message:"Hello World!"});
})

//リッスン
server.listen(port);

// app.listen(port,() => {
//     console.log(`listening on *:${port}`);
// })