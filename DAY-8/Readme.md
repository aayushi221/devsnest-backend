Take aways of today's lecture:

// app.use() to use a middleware before every api call

Get is stored in cache.
Hence not used for passwords.


Middleares mostly used for authentication and login e.g.

app.get("/", (req,res,next) => {
   if(req.query.admin === 'true'){
       next();
   }
   else {
       res.status(401).send("should be admin");
   }
})

check the get call on localhost:5000/?admin=true;