const express = require('express')
const app = express();
const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    res.json({result: "Docker testing project"})
})

app.listen(PORT, () => {
    console.log('running on port %d', PORT)
})