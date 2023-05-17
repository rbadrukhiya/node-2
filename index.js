// file system
const fs = require('fs')

// fs.writeFile('read.txt' ,'hello skywin'  , (err)=>{
//     console.log('file created')
// })


// fs.appendFile('read.txt' , 'good morning' , (err)=>{
//     console.log('writening');
// })

// const app = fs.readFile('read.txt' , (err , data)=>{
//     console.log(data.toString());
// })

fs.unlink('read.txt' , (err)=>{
    console.log('file deleted');
})