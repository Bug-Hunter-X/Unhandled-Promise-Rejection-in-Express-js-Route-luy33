const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send a proper error response
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation(){
  await new Promise(resolve => setTimeout(resolve,100));
  throw new Error('Something went wrong!');
} 