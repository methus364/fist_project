const express = require('express')
const app = express()
const port = 3000
const userRouter =  require( './routes/userRouter')

app.use(express.json())
app.get('/test',(req,res) => {
    res.json({message:'yeat'}).status(200);
})

app.use('/userRouter', userRouter);

app.listen(port, () => {
    console.log('Express app listening on port ', port);
})