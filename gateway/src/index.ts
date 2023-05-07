import express from "express"
import cors from "cors"
import proxy from "express-http-proxy"

const app = express()
  
app.use(cors())
app.use(express.json())

      
 

app.use('/', proxy('http://localhost:3002'))
app.use('/user', proxy('http://localhost:3001'))



const port = 4000
app.listen(port, ()=>{
    console.log(`Gatewey is running on ${port}`)
})