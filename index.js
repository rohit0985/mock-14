const express = require("express")
const { connection } = require("./db")
const app = express()
require("dotenv").config();
const cors = require("cors")




app.use(express.json())
app.use(cors())


let wordsList = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque nemo, nam laborum sed repellat aperiam. Similique possimus itaque animi, id accusamus placeat aspernatur dolor molestias provident, cumque neque labore voluptates recusandae amet? Tenetur autem tempora corrupti cupiditate, voluptatibus aut consectetur commodi dolor suscipit cumque vel sunt, at possimus quo debitis amet, quam sit doloremque! Necessitatibus consequuntur, ea saepe sequi, aperiam numquam corporis quod ut nemo aliquam iusto ad, velit reprehenderit exercitationem doloribus. Esse illo distinctio cum consectetur ducimus. Tempore, nulla voluptate. Esse aperiam earum magnam quaerat sunt provident quidem ducimus, quisquam sit, enim ullam assumenda sequi culpa laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis sapiente! Nemo dignissimos amet necessitatibus mollitia consequatur, sapiente ut dicta molestias nam debitis enim quam adipisci unde labore provident assumenda nulla iste distinctio doloremque, harum alias? Soluta doloribus, perspiciatis at sequi harum dolorum incidunt odio fuga odit dolorem exercitationem aperiam id quisquam accusamus rem corporis, sit totam beatae similique reprehenderit! Optio inventore quaerat ipsa odio vero, est fugit similique officia autem rerum enim atque minus eos quisquam maxime perferendis quod consequuntur et. Incidunt, cupiditate qui. Asperiores laboriosam facere ab quod autem eos corporis, similique commodi! Cupiditate obcaecati praesentium ea minima."

app.get("/", (req, res)=>{
    let arr = wordsList.split(" ")
    let word = arr[Math.floor(Math.random()*200)]
    .replace(",", "")
    .replace(".", "")
    .replace("!",(""))
    res.send({word})
})



app.listen(process.env.PORT, async(req, res)=>{
   try{
    await connection;
    console.log('Connected to db')
   }catch(err){
    console.log(err)
   }
})