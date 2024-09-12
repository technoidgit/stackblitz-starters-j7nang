let express = require("express");
let app = express()
let PORT = 3000
//Create an endpoint that takes a name 
//as a query parameter and returns it in lowercase.
// API call - http://localhost:3000/whisper?name=John
app.get("/whisper",(req,res)=>{
    let name= (req.query.name).toLowerCase();
    res.send(name);
});
/* n endpoint that takes companyName and productName 
as query parameters and returns the full product name
API Call: http://localhost:3000/full-product-name?companyName=Apple&productName=iPhone
Expected Output: Apple iPhone */
app.get("/full-product-name", (req,res)=>{
    let companyName = req.query.companyName;
    let productName = req.query.productName;
    let fullProductName = companyName +" "+ productName;
    res.send(fullProductName);
});

/* an endpoint that takes month and year 
as query parameters and returns 
a concatenated date in the format 'Month/Year'.
 API Call: http://localhost:3000/date?month=05&year=2024
Expected Output: 05/2024  */
app.get("/date", (req,res)=>{
    let month = req.query.month;
    let year= req.query.year;
    let date = month +"/"+ year;
    res.send(date);
});



/* an endpoint that takes your home city 
as a query parameter and returns a 
greeting in the format 'You live in <city name>'.
 API Call: http://localhost:3000/greet?city=Kolkata
Expected Output: You live in Kolkata */ 
app.get("/greet", (req,res)=>{
    let city = req.query.city;
    let greet = "You live in "+city;
    res.send(greet);
});


/*  an endpoint that takes capital,
 and country as query parameters and 
 returns a formatted sentence in 
 the format “[capital] is the capital of [country].”
 API Call: http://localhost:3000/capital?capital=Delhi&country=India
Expected Output: Delhi is the capital of India.*/
app.get("/capital", (req,res)=>{
    let capital = req.query.capital;
    let country= req.query.country;
    let formattedSentence = capital +" is the capital of "+ country;
    res.send(formattedSentence);
});


/* an endpoint that takes firstName, lastName, 
and domain as query parameters and returns 
a formatted office email address.
 API Call: http://localhost:3000/email?firstName=aman&lastName=ranjan&domain=company.com
Expected Output: aman.ranjan@company.com*/
app.get("/email", (req,res)=>{
    let firstName = req.query.firstName;
    let lastName= req.query.lastName;
    let domain =req.query.domain;
    let formattedEmail = firstName + lastName +"@" +domain;
    res.send(formattedEmail);
});

app.listen(PORT,()=>{
    console.log("app running on " + PORT);
});