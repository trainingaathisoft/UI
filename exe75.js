const numbers=[1,2,3,4,5,6,7,8];

let evenNumbers=numbers.filter((value)=>value%2==0)

console.log("Evennumbers",evenNumbers)



const num=[1,2,3,4,5,6,7,8,9,10,11]

let evenum=numbers.filter((value)=>value%2==0)

console.log(evenum)

let oddNumbers=numbers.filter((value)=>value%2==1)

console.log("Oddnumbers",oddNumbers)




const members=[23,33,44,55,66,12,31,13,11,10];

let Voters=members.filter((value)=>value>18)

console.log("Voters",Voters)



const cart=[

    {id:1,name:"redme",cost:10000},

    {id:2,name:"Oppo",cost:7000},

    {id:3,name:"Samsung",cost:12000},

    {id:4,name:"Realme",cost:6000},



];



let cart_items_find=cart.find((value)=>value.name>="Realme")

console.log("findvalue",cart_items_find)

// //find index

let cart_items_findindex=cart.findIndex((value)=>value.id==4)

console.log("findintex",cart_items_findindex)

