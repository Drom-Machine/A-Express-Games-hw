const express = require('express');
const logger = require('morgan');
const path = require('path')


const app = express()


//-------------------------------------------------indexRouter---
const indexRouter = require('./router/indexRouter')
//------http handler
app.use("/", indexRouter)


//-------------------------------------------------todoRouter---
const gameRouter = require('./router/gameRouter')
//------http handler
app.use("/api/game", gameRouter)


//------------------------------------------------middleware
app.use(logger('dev'));
app.use(express.json())


// app.use(express.static(path.join(__dirname, "public")));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.listen(3000, function(){
    console.log('Server Up, I Am Invincible')
})

module.exports = app