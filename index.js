import { sqrt } from 'mathjs'
import readline from 'readline'
// const readline = require("readline")
// const math = require("math")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function deal(a, b, c){
    a = Number(a)
    b = Number(b)
    c = Number(c)
    console.log(a,b,c)
    if (a != 0 && b != 0 && c != 0){
        
        
        let D = b*b - 4*a*c
        if(D > 0){
            
            let firstX = ((-b + sqrt(D)) / (2*a))
            let secondX = ((-b - sqrt(D)) / (2*a))
            return [firstX, secondX]
        }

        else if(D == 0){
            
            let X = (-b) / (2*a)
            return(X)
        }

        else if(D < 0){
            
            return('there is no roots')
        }
    }

    else{
        console.log('else')
        if(a == 0 && b != 0 && c != 0){
            let X = -(c/b)
            return(X)
        }
        else if(a !=0 && b == 0 && c !=0){
            let firstX = -(sqrt(-c/a))
            let secondX = (sqrt(-c/a))
            return [firstX, secondX]
        }
        else if(a != 0 && b !=0 && c == 0){
            let firstX = 0
            let secondX = -(b/a)
            return [firstX, secondX]
        }
        else if(a == 0 && b ==0 && c == 0){
            
            return('x - R')
        }
        else if(a != 0 && b ==0 && c == 0){
            return(0)
        }
        else if(a == 0 && b == 0 && c!= 0){
            return('there is no roots')
        }
        else if(a == 0 && b !=0 && c == 0){
            return(0)
        }
    }
}

function equation(){
    rl.question('ax^2 + bx + c = 0, choose a ', (a)=>{
        rl.question('ax^2 + bx + c = 0, choose b ', (b)=>{
            rl.question('ax^2 + bx + c = 0, choose c ', (c)=>{
                let result = deal(a, b, c)
                console.log(result)
            })
        })
    })
}

equation()