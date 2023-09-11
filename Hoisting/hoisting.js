/*Hoisting in JS means it helps us to access function even if we call function before it initialized.
But it is for only general basic function declaration..not for (say) arrow , function with variables etc..
But hoisting is not preferable*/

love('Suzuka')  //called function even b4 its declaration
function love(name){
    console.log(`Nobita loves ${name}`)
    nolove('Suzuka')    //Even the function call in other function declaration also works.
}


function nolove(name){
    console.log(`But ${name} loves many`)
}

//const sum=add(7,7)  Since this is an arrow function..hoisting isnt supported hence results in ReferenceError.
const add=(n1,n2)=>{return `${n1}+${n2}`
};