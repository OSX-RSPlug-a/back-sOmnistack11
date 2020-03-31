const app = require('./app')

const port = 3333;

app.listen(port, (err) => {
    if (err) {
      console.log('Error heppened') 
    } else {
      console.log(`Enabled and web serv list on port ${port}!`)
      console.log('The system running on http://localhost:3333')
    }
});