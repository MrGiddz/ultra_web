const fs = require('fs')

const text = "New text";

fs.writeFile("C://text.txt", text, error => {
    if (error) {
        console.log(error)
    }
    console.log("File Written successfully")
})

