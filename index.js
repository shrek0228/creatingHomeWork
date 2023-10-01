const authModule = require('./auth.js');
const student = require('./student.js');
const studentModule = require('./student.js');

// const readLine = require('readline')

// // const rl = readLine.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // })

var studentUser
var teacherUser

const main = () => {
    if (!studentUser && !teacherUser){
        console.log('Авторизація: \n1: Я вчитель\n2: Я учень')
        authModule.rl.question('',(select)=>{
            switch(select){
                case '1':
                    authModule.authTeacher((teacher) => {
                        teacherUser = teacher
                        main()
                    })
                    break;
                case '2':
                    authModule.authStudent((student) => {
                        studentUser = student
                        main()
                    })
                    break;
            } 
        })
        
    } else if (teacherUser){
        console.log('You are teacher ')
        console.log(teacherUser.name, teacherUser.surname)
        console.log('1: show all students \n2: rate \n3: show marks')
        authModule.rl.question('', (select) => {
            switch(select){
                case '1':
                    for (let student of studentModule.students){
                        console.log(`${student.name} ${student.surname}`)
                    }    
                case '2':
                    console.log('choose student by surname')
                    authModule.rl.question('', (surname) => {
                        console.log('choose subject: \n1: Математика \n2: Українська мова \n3: Англійська мова \n4: Історія України')
                        authModule.rl.question('', (subjectI) => {
                            console.log('choose mark')
                            authModule.rl.question('', (mark) => {
                                for (let student of studentModule.students){
                                    if (surname == student.surname) {                            
                                        switch(subjectI){
                                            case '1':
                                                var subject = 'Математика'
                                                break
                                            case '2':
                                                var subject = 'Українська мова'
                                                break
                                            case '3':
                                                var subject = 'Англійська мова'
                                                break
                                            case '4':
                                                var subject = 'Історія України'
                                                break
                                        }
                                        student.marks[subject].push(mark)
                                        console.log(student.marks)

                                    }
                                }
                            })
                        })
                        
                    })
                case '3':
                    for (let student of studentModule.students){
                        console.log(`${student.name} ${student.surname}`)
                        console.log(student.marks)
                    }
            }
        })



    } else if (studentUser){
        console.log('You are student')
        console.log(studentUser.name, studentUser.surname)
        console.log('Wanna see ur marks? \n1: Yes \n2: No')
        authModule.rl.question('', (select) => {
            switch(select){
                case '1':
                    studentUser.printMarks()
                case '2':
                    console.log('Ok')
            }
        })
    }
    
}

main()
