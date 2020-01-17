import fetch from "isomorphic-unfetch";
const config = require("../config");

const ApiPost = (url, body) => {
    console.log("Api post sending with url and body: ", url, body);
    return fetch(`${config.API_URL}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}

module.exports = ApiPost;