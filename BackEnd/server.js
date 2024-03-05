const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./userSchema'); // Importing the user model
const { validEmail, validPassword, validUsername } = require('./validations');
const app = express();
const port = 8080;
// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

app.post("/create_user", async (req, res) => {
    try {
        const data = req.body;
        const { username, email, password } = data;
        const tankLevel = 1;
        if (!username || !password || !email) {
            console.log("not enough stuff")
            return res.send({ message: "Not enough details", status: 500 });
        }
        if (!validEmail(email)) {
            console.log("Invalid email");
            return res.send({ message: "Invalid email", status: 500 });
        }
        if (!validPassword(password)) {
            console.log("Invalid password");
            return res.send({ message: "Invalid password", status: 500 });
        }
        if (!validUsername(username)) {
            console.log("Invalid username");
            return res.send({ message: "Invalid username", status: 500 });
        }
        let uniqueEmail = await User.findOne({ email });
        if (uniqueEmail) {
            console.log("Email already exists");
            return res.send({ message: "Email already exists", status: 500 });
        }
        let uniqueUsername = await User.findOne({ username });
        if (uniqueUsername) {
            console.log("Username already exists");
            return res.send({ message: "Username already exists", status: 500 });
        }
        let createUser = await User.create({ email: email, username: username, password: password, tankData: tankLevel });
        console.log(createUser);
        return res.send({ message: `Created user ${username}`, status: 200 });
    } catch (error) {
        console.log(error)
        return res.send({ message: `Unknown error`, status: 500 });
    }
})

app.post("/user_login", async (req, res) => {
    try {
        const data = req.body;
        const { email, password } = data;
        if (!email || !password) {
            return res.send({ message: "Insufficient data", status: 500 });
        }
        let uniqueEmail = User.findOne({ email });
        if (!uniqueEmail) {
            return res.send({ message: "Email doesnt exist", status: 500 });
        }
        else {
            let dataCheck = await User.findOne({ email, password });
            if (!dataCheck) {
                return res.send({ message: "Credentials do not match", status: 500 });
            }
            else {
                return res.send({ message: "Logged in Successfully", status: 200 })
            }
        }
    } catch (error) {
        console.log(error)
        return res.send({ message: `Unknown error`, status: 500 });
    }
})

app.post("/getData", async (req, res) => {
    try {
        const email = req.body.email;

        // Execute the query to find a document based on the email
        const response = await User.findOne({ email: email });
        if (response) {
            res.send({ data: response }); // Send the found document as a response
        } else {
            console.log("No document found for email:", email);
            res.send({ message: "No document found for email", status: 404 });
        }
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/change_water", async (req, res) => {
    try {
        const value = req.body.value;
        const email = req.body.email;
        await User.findOneAndUpdate({ email: email }, { tankData: value }, { new: true });
    }
    catch (error) { }
})
app.post("/updateTank", async (req, res) => {
    try {
        // Parse the integer value from the request body
        // const value = parseInt(req.body);
        const { email, value, motor } = req.body;
        // console.log(req.body)
        // console.log(email, value, motor)
        const user = req.body.email;
        const data = await User.findOneAndUpdate({ email: user }, { tankData: value, motorStatus: motor }, { new: true });

        // Log and send back the updated tankData
        // console.log("Updated tankData:", data);
        res.status(200).json({ message: 'Tank data updated successfully', tankData: data.tankData });
    } catch (error) {
        console.error("Error updating tankData:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
