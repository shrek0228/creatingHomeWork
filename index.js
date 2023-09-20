const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function per(a, b){
    return (Number(a) + Number(b))*2
}

function rec(){
    rl.question('width of rectangle', (width)=>{
        rl.question('length of rectangle', (length)=>{
            if (length > 0 && width > 0){
                let perimetr = per(length, width) 
                console.log(perimetr)
            }
            else{
                console.log('error')
            }
        })
    })
}

rec()