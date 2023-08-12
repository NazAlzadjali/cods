// // String templet
// var uname = "Maryam"
// var age = 23
// var output = `I'm ${uname} and I'm ${age} years old`
// console.log(output)

// Diffrenece between var , let , const
// function scope in all of them
// var num = 10
// function getTheNum(){
//     var num = 20
//     console.log(num)
// }
// getTheNum()
// console.log(num)

// let num = 10
// function getTheNum(){
//     let num = 20
//     console.log(num)
// }
// getTheNum()
// console.log(num)


//Why we do not have to use var {

// //Local scope in (if , else if , loop)
// var num = 10
// var x = true
// if(x === true)
// {
//     var num = 20
// }
// console.log(num) // it will be 20

// let num = 10
// let x = true
// if(x === true)
// {
//     let num = 20
// }
// console.log(num) // it will be 10

//reassign

//redeclare

//hoisting : the initial vaalue of the var is undefind

// // the var will be part of the window it is risk
// var aaa = "aaa"
// console.log(window)


//                              }




// //Arrow fucation
// const getTheNumber = num => {
//     for( let i = 1 ; i <= num ; i++)
//     {
//         if( i % 2 === 0)
//         {
//         console.log(i)
//         } 
//     }
// }
// getTheNumber(50)

// //Spread opreator => x = y => any effect in x will effect y
// const num1 = [1,2,3,4,5]
// const num2 = num1
// console.log(num1)
// console.log(num2)
// num1.push(50)
// console.log(num1)
// console.log(num2)
// //the Spread opreator will take only the copy so it is will not effect the other variable
// const num11 = [1,2,3,4,5]
// const num22 = [...num11,6,7,8,9,10]
// console.log(num11) // -> [1,2,3,4,5]
// console.log(num22) // -> [1,2,3,4,5,6,7,8,9,10]
// num11.push(50)
// console.log(num11) // -> [1,2,3,4,5,50]
// console.log(num22) // -> [1,2,3,4,5,6,7,8,9,10]

//Array or object distrcation

// const names= ["ahmed", "amr", "maya","salim"]
// // Aray distraction
// // ..x -> rest opreator
// const [name1, name2, ...x] = names
// console.log(x)

// //Object distraction

// const user = {
//     name: "mae",
//     age: 67,
//     addess: "Oman"
// }
// // we have to call the keys
// //const {name,age,addess} = user
// const {name, ...rest} = user
// console.log(rest)

//  
    // const [user1] = users
    // const {Mobile} = user1
    // const [no1 , no2] = Mobile
//OR
    // const [{Mobile}] = users
    // const [mop1 , mop2] = Mobile
    // console.log(mop2)

//ForEach -> Builtin function -> it is as a for loop espicaly for the array
//Arrow function
// const names = ["Mar","Ahmed","Salim","Sara"]
// names.forEach((el,idx) => {
//     console.log(idx)
//     console.log(el)
// })
// //OR 
// names.forEach(el => console.log(el))

// //Map -> Builtin function -> it is as a for loop for the array  
// const user = [{
//     name: "maryam",
//     age: 67,
//     addess: "Oman"
//     },
//     {
//         name: "Salim",
//         age: 67,
//         addess: "Oman"
//     },
//     {
//     name: "Sara",
//     age: 67,
//     addess: "Oman"
//     }
// ]
// user.map(el => console.log(el))

// //Filter -> Builtin function -> it is as a for loop for the array 
// const num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.filter(el => el > 5)
// console.log(newNum);


// //Q:5
// let num2 = prompt("Enter the number 1 to check")
// let num3 = prompt("Enter the number 2 to check")
// let num4 = prompt("Enter the number 3 to check")


// const getTheGreatest = () =>
// {
//     console.log(`The max : ${Math.max(num2,num3,num4)} and the min ${Math.min(num2,num3,num4)}`)
// }

// console.log(getTheGreatest(num2,num3,num4))



//   


// //Q:12.2
// const getTheMarks = (ma1, ma2, ma3 ,ma4, ma5) => {
//     console.log(`The Total : ${ma1 + ma2 + ma3 + ma4 + ma5}`);
//     console.log(`The Avg : ${(ma1 + ma2 + ma3 + ma4 + ma5)/5 } `);
//     console.log(`The Per : ${(ma1 + ma2 + ma3 + ma4 + ma5)*1}%`);

// }
// getTheMarks(95,76,58,90,89)

// //Q:13
// function daysInMonth (month, year) { 
//     if(month >= 1 && month <= 12)
//     {
//     return new Date(year, month, 0).getDate();
//     }else
//     {
//         console.log("only between 1-12");
//     }
//   }
// console.log(daysInMonth(20,2000));




