const express = require("express");
const cors = require("cors")
const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();


const puzzleNumber = 2;
const todaysWord = "FILME";




app.use(express.json());
app.use(cors());
app.use(express.static('build'));

app.get("/api/word", ((req, res) => {
    res.json({puzzleNumber, todaysWord})
}))

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
