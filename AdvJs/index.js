// const getTicket=()=>new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         if(Math.random()>.5){
//             resolve(true)
//         }
//         else{
//             reject(false)
//         }
//     },2000)
// })
// const enterHall=ticket=>{
//     if(ticket){
//         console.log("Entered Hall")
//     }else{
//         console.log("House Full")
//     }
// }

// // let ticket

// // try{
// //     ticket=await getTicket()
// // }catch(e){
// //     ticket=e
// // }


// // enterHall(ticket)
// // console.log("The end")

// getTicket().then(ticket=>enterHall(ticket)).catch(e=>enterHall(e)).finally(()=>console.log("The end"))

class User{
    constructor(name,age,address){
        this.name=name
        this.age=age
        this.address=address
    }
    getInfo=()=>{
        return{
            name:this.name,
            age:this.age,
            address:this.address
        }
    }
}

// module.exports=User;
export default User