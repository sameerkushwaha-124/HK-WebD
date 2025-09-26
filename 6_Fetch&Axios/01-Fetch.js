// Here fetch is written using the .then syntax
function main(){
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async(response) =>{
            const jsonData = await response.json();
            console.log(jsonData.todos.length)
            await response.text()
        })
}

// Just a cleaner syntax of the above using async wait -
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos") // you can handle using promises as well
    const jsonData = await response.json();// response.json() is liye kyunki hame pata hain output json me hain
                         // agar output we know ki text me hain toh response.text() ans so on..
    console.log(jsonData.todos.length);
}

main();
