const frieds:string[]=['rahim', 'karim']
const schoolFds:string[]= ['kashem','mithu', 'hridoy', 'tonmoy'];
const collageFds: string[]=['rayhan', 'assadul'];

// frieds.push(schoolFds)
const allFds:string[]=[...frieds,...schoolFds,...collageFds];

/**
 * rest oparatiors
 */

const invitation=(...friends:string[])=>{
  friends.map((friend:string)=>console.log(`${friend} i am inviting you`))
}

invitation('rohim', 'korim')
