import dotenv from 'dotenv'
dotenv.config()
import createServer from "./server.js";


const server = await createServer()
const PORT = process.env.PORT || 5500



server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})