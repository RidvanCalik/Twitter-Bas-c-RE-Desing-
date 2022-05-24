const express = require('express')
const app = express()
var cors = require('cors')
var corsOptions = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
let users = [
    {
        userID: "123",
        userName: "Ayşe",
    },
    {
        userID: "124",
        userName: "Mehmet",
    },
    {
        userID: "125",
        userName: "Zeynep",
    },
]

let posts = [
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
    if (posts.length > 0) {
        response.json(true);
    } else {
        response.json(false);
    }

})
app.get('/api/checkUser', cors(corsOptions), (request, response) => {
    console.log(request);

})
app.get('/api/trends', cors(corsOptions), (request, response) => {
    var reData = [];
    posts.forEach(function (element) {
        element["postTag"].map(function (x) {
            reData.push("#" + x);
        })
    })
    response.json(reData);
})
app.get('/api/posts', cors(corsOptions), (request, response) => {
    response.json(posts);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})