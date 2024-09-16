let express = require('express');
let app = express();
const port = 3000;
 /*API Call: <http://localhost:3000/total-distance?distance1=5.5&distance2=10.2>
Expected Output: 15.7 */
app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});
 /*API Call: <http://localhost:3000/total-time?time1=1.5&time2=2.0&time3=0.5>
Expected Output: 4.0 */
app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});
 /*API Call: <http://localhost:3000/average-speed?totalDistance=150&totalTime=3>
Expected Output: 50 */
app.get('/average-speed', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

 /*API Call: <http://localhost:3000/eta?distance=120&speed=60>
Expected Output: 2 */
app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

 /*API Call: <http://localhost:3000/total-calories?duration1=30&duration2=45&caloriesPerMinute=10>
Expected Output: 750 */
app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let totalCalories = (duration1 + duration2) * caloriesPerMinute;
  res.send(totalCalories.toString());
});

 /*API Call: <http://localhost:3000/interest-earned?principal=1000&rate=5&time=2>
Expected Output: 100 */
app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interestEarned = (principal * rate * time) / 100;
  res.send(interestEarned.toString());
});

 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:` + port);
});