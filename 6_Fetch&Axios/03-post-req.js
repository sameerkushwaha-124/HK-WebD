const axios = require("axios");


//POST: // if we want to make a post request using fetch("link", {method, body, headers})
async function main(){
    const response = await fetch("LINK",
    {
        method:"POST",
        body : {
            username:"ABC",
            pssword:"12345678"
        },
        headers:{
            "Authorization": "Bearer 123"
        },
    }
)
    const json = await response.json();
    console.log(json.todos.length);
}


// POST : IN aXIOS : axios.post("link", {data}, {headers})
async function main(){
    const response = await axios.post("LINK",
    {
        username:"ABC",
        password:"12345678"
    },
    {
        headers:{
            "authorization": "Bearer 123"
        },
    }
);
    console.log(response.data.todos.length);
}


main();
