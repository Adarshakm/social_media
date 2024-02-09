const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()


app.use(express.json())

app.use(cors({
    orgin: true
}))


app.get("/", (req, res) => {
    res.send("hellooooooo")
})

app.post("/signin", (req, res) => {

    console.log("login working");

    console.log(req.body);

    USER.findOne({ email: req.body.email }).then(user => {
        console.log(user);
        if (user) {
            const token = jwt.sign({ email: user.email }, "adharsh123")
            console.log(token);
            res.send({ msg: "login sucess", token: token })

        } else {
            res.send("login not  sucess")

        }

    }).catch(err => {
        console.log(err);
    })

})

const userSchema = new mongoose.Schema({
    name: {
        type: "String"
    },
    email: {
        type: "String"
    },
    password: {
        type: "String"
    },
    Role: {
        type: String,
        default: "user"
    }
})

const USER = mongoose.model("USER", userSchema)



app.post("/register", (req, res) => {
    const user = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => {
        res.send("Saved Success")
    }).catch(err => {
        res.send("not saved", err)
    })



})

app.post("/register_company", (req, res) => {
    const user = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        
        Role: "company"
    })

    user.save().then(() => {
        res.send("Saved Success")
    }).catch(err => {
        res.send("not saved", err)
    })



})





mongoose.connect("mongodb+srv://adarsh22akm:XwUhxD8WvhIewFkg@cluster0.oeodsid.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("database connected")

}).catch((err) => {
    console.log("database not connected", err)
})

app.listen(5000, () => {
    console.log("server is listening at port 5000")
})
