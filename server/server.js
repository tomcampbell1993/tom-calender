import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

let users = [

]

app.post("/api/register", (req, res) => {

    const registeredUser = users.find(user => user.email === req.body.email);
    if(registeredUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    const newUser = {email: req.body.email, password: req.body.password};
    users.push(newUser);
    return res.status(201).json({ message: "User registered successfully" });
})

app.post("/api/login", (req, res) => {
    const registeredUser = users.find(user => user.email === req.body.email);

    if(!registeredUser) {
        return res.status(400).json({message: "User does not exist"});
    }

    if(registeredUser.password !== req.body.password){
        return res.status(400).json({message: "incorrect password"});
    }

    return res.status(200).json({message: "login successful", email: registeredUser.email});

})

app.listen(3001, () => {
    console.log("API running on http://localhost:3001");
});