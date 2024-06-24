const getTicket=()=>new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(Math.random>.5){
            resolve(true)
        }
        else{
            reject(false)
        }
    },2000)
})
const enterHall=ticket=>{
    if(ticket){
        console.log("Entered Hall")
    }else{
        console.log("House Full")
    }
}

