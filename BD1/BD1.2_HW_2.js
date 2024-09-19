let express = require('express');
let app = express();
let port = 3000;
//API Call: http://localhost:3000/bmi?weight=70&height=1.75
app.get('/bmi', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  res.send('Your BMI is ' + bmi);
});
// API Call: http://localhost:3000/checkout?product=Fuse&units=2&price=40
app.get('/checkout', (req, res) => {
  let product = req.query.product;
  let units = parseFloat(req.query.units);
  let price = parseFloat(req.query.price);
  let totalPrice = units * price;
  res.send('Your total for ' + units + ' ' + product + ' is ' + totalPrice);
});
//API Call: http://localhost:3000/grade?maths=70&science=82&english=75
app.get('/grade', (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  let gradeInPercentage = ((maths + science + english) / 300) * 100;
  res.send('Your grade in percentage is ' + gradeInPercentage + '%');
});
//API Call: http://localhost:3000/discounted-price?cartTotal=150&discount=5
app.get('/discounted-price', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let english = parseFloat(req.query.english);
  let discountedPrice = cartTotal - cartTotal * (discount / 100);
  res.send('Result: Your bill amount is  ' + discountedPrice);
});
//API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3
app.get('/split-bill', (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  res.send('Result: Each friend owes Rs. ' + splitAmount + ' against the bill');
});
// API Call: http://localhost:3000/celsius-to-fahrenheit?temperature=20
app.get('/celsius-to-fahrenheit', (req, res) => {
  let celcius = parseFloat(req.query.temperature);
  let fahrenheit = (celcius * 9) / 5 + 32;
  res.send('Result: ' + fahrenheit + ' Fahrenheit');
});
/*API Call: http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160 */
app.get('/monthly-salary', (req, res) => {
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let totalHours = parseFloat(req.query.totalHours);
  let monthlySalary = hourlyWage * totalHours;
  res.send('Result: Your monthly salary is ₹' + monthlySalary);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
