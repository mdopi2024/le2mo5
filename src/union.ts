let data:string| number;
data='opi korim';
data=45

/**
 * user dashboard with union
 */
type User = 'admin' | 'modaration' | 'normalUser'
const userDashbord =(role:User)=>{
    if(role === 'admin'){
        return 'you a the admin'
    }else if(role=== 'modaration'){
        return 'you are the modarator'
    }else{
        return 'you are a normal user'
    }
}
// console.log(userDashbord('normalUser'))

/**
 * intersector
 */

type Admin={
    id:number;
    name:string
}

type Modarator={
    isMarried:boolean;
}

const boss:Admin & Modarator ={
    id:3,
    name:'opikorim',
    isMarried:true
}