const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require('cors') 



require("./server/config/mongoose.config")
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true}))

const AllPetsRoutes = require("./server/routes/pet.routes")
AllPetsRoutes(app)

app.listen(8000, () => console.log("This server is fired up on port 8000"))