const fs= require('node:fs/promises')

// try{
//    await fs.writeFile('demo.txt','Hello Nabin ');
//     console.log('Succesfully Written')
// }catch(e){
//     console.log('Error writing') es6model
// }


// fs.writeFile('demo.txt','Hello Nabin How are you ')
// .then(()=> console.log('Succesfully Written'))
// .catch(()=>console.log('Error writing'))

fs.readFile('demo.txt','utf-8') .then(data=>console.log(data)).catch(()=>console.log("Eroor reading"))