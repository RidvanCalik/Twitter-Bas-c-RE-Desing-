const express = require('express')
const app = express()
var cors = require('cors')
var corsOptions = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
let data = [
    {
        name: "Ayşe",
        postTag: ["Tech", "Boomer"],
        post: "Damn this teaching hard for human",
        id: 1
    },
    {
        name: "Mehmet",
        postTag: ["RTE"],
        post: "EYYY OSMANLIII",
        id: 2
    },
    {
        name: "Zeynep",
        postTag: [],
        post: "Bruh",
        id: 3
    }
]
app.get('/api', cors(corsOptions), (request, response) => {
    if (data.length > 0) {
        response.json(true);
    } else {
        response.json(false);
    }

})
app.get('/api/trends', cors(corsOptions), (request, response) => {
    var reData = [];
    data.forEach(function (element) {
        element["postTag"].map(function (x) {
            reData.push("#" + x);
        })
    })
    response.json(reData);
})
app.get('/api/posts', cors(corsOptions), (request, response) => {
    response.json(data);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})