const data = require('./db.json');
const express = require('express');
const app = express();
var cors = require('cors');

var corsOptions = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.get('/api', cors(corsOptions), (request, response) => {

    if (data.users.length > 0) {
        response.json(true);
    } else {
        response.json(false);
    }

})
app.get('/api/users', cors(corsOptions), (request, response) => {

    async function findUser(UserNM, Ps) {
        var user = [];
        user = data.users.filter(
            function (user) {
                return (user.userName == UserNM && user.userPass == Ps);
            }
        )
        return user;
    }

    findUser(request.query.UserName, request.query.Password).then((e) => response.json(e));



})

app.post('/api/users', cors(corsOptions), (request, response) => {

    async function userİsAvaible(UserNM) {
        data.users.indexOf(userName)
    }
    findUser(request.query.UserName, request.query.Password).then((e) => response.json(e));

})
app.get('/api/trends', cors(corsOptions), (request, response) => {
    var reppeatingTags = [];

    data.posts.forEach(post => {
        post.postTag.forEach(tag => {
            reppeatingTags.push(tag);
        });
    });

    var tags = new Set([...reppeatingTags]);
    tags = Array.from(tags);
    response.json(tags);
})
app.get('/api/posts', cors(corsOptions), (request, response) => {


    function getImgAndName(UI) {
        let userImg, userName;

        data.users.forEach((user) => {
            if (user.userID == UI) {
                userImg = user.userImg;
                userName = user.userName;
            }
        })
        return [userImg, userName];
    }
    data.posts.forEach((post) => {

        post["postUserImg"] = getImgAndName(post.postUserID)[0];
        post["postUserName"] = getImgAndName(post.postUserID)[1];


    });


    response.json(data.posts);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})