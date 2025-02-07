const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing here. The server will crash on error!
    console.error(err);
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation(){
  //Simulate an asynchronous operation that can throw
  await new Promise(resolve => setTimeout(resolve,100));
  throw new Error('Something went wrong!');
}