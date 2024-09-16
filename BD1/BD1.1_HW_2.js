let express = require('express');
let app = express();
let port = 3000;
/*API Call: http://localhost:3000/custom-commit?type=feat&message=Added%20new%20API%20endpoint

Expected Output: feat: Added new API endpoint */
app.get('/custom-commit', (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ': ' + message;
  res.send(result);
});
/*API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
Expected Output: This certification is awarded to Amit Ranjan for completing the course BytR */
app.get('/certificate', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let result =
    'This certification is awarded to ' +
    firstName +
    ' ' +
    lastName +
    ' for completing the course ' +
    courseName;
  res.send(result);
});
/*API Call: http://localhost:3000/autoreply?startMonth=May&endMonth=June

Expected Output: Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from May till June. Your enquiry will be resolved by another colleague. */
app.get('/autoreply', (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result =
    "Dear customer, thank you for reaching out to me. Unfortunately. I'm out of office from " +
    startMonth +
    ' till ' +
    endMonth +
    '. Your enquiry will be resolved by another collegue.';
  res.send(result);
});
/*API Call: http://localhost:3000/secureurl?domain=app.invact.com

Expected Output: https://app.invact.com */
app.get('/secureurl', (req, res) => {
  let domain = req.query.domain;
  let result = ' https://' + domain;
  res.send(result);
});
/* API Call: http://localhost:3000/sendotp?otpCode=1234

Expected Output: Your OTP for account verification is 1234. Do not share this with anyone*/
app.get('/sendotp', (req, res) => {
  let otpCode = req.query.otpCode;
  let result =
    'Your OTP for account verififcation is ' +
    otpCode +
    '. Do not share this with anyone';
  res.send(result);
});
/* API Call: http://localhost:3000/welcome?firstName=Amit&email=amit@gmail.com

Expected Output: Hey Amit. We're excited to have you here, we'll send future notifications to your registered mail (amit@gmail.com)*/
app.get('/welcome', (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let result =
    'Hey ' +
    firstName +
    ". We're excited to have you here, we'll send future notifications to your registered mail (" +
    email +
    ')';
  res.send(result);
});
/*API Call: http://localhost:3000/github-profile?userName=ankitkumar123

Expected Output: https://github.com/ankitkumar123

 */
app.get('/github-profile', (req, res) => {
  let userName = req.query.userName;
  let result = 'https://github.com/' + userName;
  res.send(result);
});
/* API Call: http://localhost:3000/text-to-csv?id=1254&email=example@gmail.com&rollNumber=24

Expected Output: 1254, example@gmail.com, 24*/
app.get('/text-to-csv', (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + ', ' + email + ', ' + rollNumber;
  res.send(result);
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:' + port);
});
