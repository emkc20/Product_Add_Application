const express = require("express")
var cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000
let conn;
app.use(express.json())
app.use(cors());

const path = require('path')    // <-- added
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
})


app.get("*", (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, "/index.html"));
});