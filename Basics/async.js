var ticket=false
const getTicket=callback=>{
    // Call back sunction passes in argument of another function
    setTimeout(()=>{
        ticket=Math.random()>0.5
        if(ticket){
        console.log('Got Ticket')
    }else{
        console.log("HouseFull")
    }
        callback()
    },2000)
}

const enterHall=()=>{
    if(ticket){
        console.log("Allowed to enter")
    }
    else{
        console.log("Not Allowed")
    }
    console.log('The end')
}

getTicket(enterHall) // function is passed not called so entire function is passed not returns value


