/**
 * normal fuction
 */

function add(num:number, num2:number, num3:number=0 ,num4?:number):number{
    return num + num2 + num3
}

add(4,3);

/**
 * arrow fuction
 */

const sum=(num:number,num2:number, num4:number=9):number=>{
    return num + num2  + num4
}

// console.log(sum(3,4,3))

/**
 * call back fuction declire type
 */

const numArray : number[]=[2,4,5,6,7,3];

const sqareArray = numArray.map((num:number):number=> num*num)
console.log(sqareArray)