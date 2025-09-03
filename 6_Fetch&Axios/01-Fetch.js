// Here fetch is written using the .then syntax
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async(response) =>{
//             const json = await response.json();
//             console.log(json.todos.length)
//             await response.text()
//         })
// }

// Just a cleaner syntax of the above using async wait -
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos") // you can handle using promises as well
    const json = await response.json();// response.json() is liye kyunki hame pata hain output json me hain
                         // agar output we know ki text me hain toh response.text() ans so on..
    console.log(json.todos.length);
}

main();
