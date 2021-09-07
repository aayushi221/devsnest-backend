//take care of security, edge cases and perfomance

const express = require('express');

const app = express();

app.listen(5000);


app.get("/withjson", (req, res) => {
    res.json({ a: 1 });

})
app.get("/status", (req, res) => {
    res.sendStatus(200);
    res.send("hemlo");
})

//the above function can be written like this. 

app.get("/statusi", (req, res) => {                 //statusi can be written as abcd or anythong right, ref neeche
    res.sendStatus(500).json({ a: 1 });
})
//This is pipelining - ek func ke baad dusra func is called pipelining

//This is query params, written as localhost:5000/query?k=key&v=value
app.get("/query", (req, res) => {
    // res.send(req.query);
    //to get only one key
    res.send(req.query.k)
})


// yeah so the abcd from upar,

// /ab?cd => b can come or Not, its optional, wont affect the result 

// /a(bc)?d  => suppose bc is optional, i.e ya to bc aae ya to bilkul hi ni aae => club kar diya

// /ab?cd => b can repeat as many times as it wants, same result

// /ab*cd => b ke baad kuch bhi but end mein always cd 

// /a/ => a ke baad kuchh bhi, start a se ho (regex)

// /*fly$/ => aage kuchh bhi end mein fly hona chahiye like butterfly, dragonfly

//for dynamic routing => '/users/:userID/book/:bookID' => colon waale dynamic value honge. => get this in req.params

app.get("/users/:userID/book/:bookID", (req, res) => {
    res.send(req.params);
    // res.send(req.params.id);

})