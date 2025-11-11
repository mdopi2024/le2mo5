const nameList:string[] =['opi','kasem','hridoy','tonmoy'];
nameList.push('mithu')
nameList.push(true)
const ageList:number[]=[2,3,4,5,5];
ageList.push('seven')

const isMarried:boolean[]=[true,false,true,true]
isMarried.push(434)

const mixed:(string | number|boolean)[]= ['opikorim',23,false]
mixed[1] = 'kasem'

/**
 * tople type of array
 */

const nameAge:[string,number]=['opi korim', 34]
nameAge[1]=42


/**
 * object non primitive type;
 */

const aboutMe:
{name:string; age:number; isGf?:boolean; isMarried:boolean}=
{name:'opi korim',age:23, isGf:false, isMarried:false}
console.log(aboutMe)