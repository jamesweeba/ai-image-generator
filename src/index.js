const express = require("express");
const app = express();
const PORT = process.argv[2] || 1700;
const imagegenerator = require("./imageGenerator/route")
const cors = require("cors")
const bodyParser = require("body-parser");
const path = require("path");


app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }), bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'client/build')))
    return res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})


app.use("/api/v1/generate-images", imagegenerator);

console.log(__dirname)
console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")

app.listen(PORT, () => {
    console.log("magic happens on port " + PORT)
})








//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
//ai

