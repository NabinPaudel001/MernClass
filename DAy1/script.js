// console.log("Hello Nabin");
// const name="Nabin";
// let age=20;

// console.log("1.",name,age);
// age="21";

// console.log("2.",name,age);
// alert("Hello Nabin");

// // const vall=true;
// const vall = !!age //? true:false;(!! checks if variable has va)
// console.log(vall)
// if(vall){
// console.log(typeof(vall));
// }

// const accessToken="";
// let hasToken;
// if(accessToken.length){
//     hasToken=true;
// }else{
//     hasToken=false;
// }

// let isUserLoggedIn=hasToken
// console.log(hasToken,isUserLoggedIn)

// const checkToken =(token)=>!!token
// const checkedToken =checkToken(12333)
// console.log(checkedToken)

// // const func=function name(params) {  } => arrow function inputs process and directly gives output
// // +string type cast to number

// const newFunc=()=>"123"
// const newFuncCaller=newFunc()
// const newFuncReferer=newFunc;

// console.log({

//         newFuncCaller,newFuncReferer ,newRefferedvalue:newFuncReferer()
// }
// )

// /*lsalcz
// csd;kmldvxnc sdc
//  */

// Object

// const obj1={name:'nabin'};
// console.log(obj1);
// console.log(obj1.name);
// const car={brand:"tesla",model:"X"};
// console.log(car.model);
// console.log(car?.milage || "N/A");

// const carmodel=car.model;
// const carproperty = car;
// console.log(carproperty);
// // object destructure - use object key as a simple variable
// const {model,brand}=car;
// console.log(model,brand);


// const person ={
//     name:"Nabin",
//     age:20,
//     isAdult:function(){
//         return this.age>=18?"he is an adult":"he is NOT an adult"
        
//     },
//     isAdult2:()=>person.age>=18,
//     //     {
//     //     console.log("called")
//     // return this.age>=18;
//     // },  
//     description: () =>{return person.name ,"is ", person.age,"and" ,person.isAdult()} ,
//     description2:function(){
//         console.log(this.name ,"is ",this.age,"and" ,this.isAdult())
//     },
// };

// console.log(person.isAdult());
// console.log(person.isAdult2());

// const op=person.description2();
// console.log(op);

// const io=person.description2();
// console.log(io)

// const arr=[1,2,3,4,5];
// const [firstI,...secondI]=arr
// console.log({firstI,secondI})

// const basicObject={
//     nam:"Nabin",
//     age:20
// }
// const completeobj={
//     roll:23,
//     ...basicObject
// }
// console.log(basicObject,completeobj)

// const newarr=[{name:'earpod',price:20000,description:'kjcsjcsdkcskd'}]

// const [banner,...card]=newarr
// console.log(banner);
// console.log(card)
// const product = {title:"T-shirt", price:2000}; 

// let txt = "The price of ";
// for (let x in product) {
//   txt ="The price of {product[x]} + "is ";
// }

// const arr=[1,2,3,4,5]
// const a1=arr.map((item,index)=>item*2)
// console.log(a1)

