const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)



// const me = new User({
//     name: 'Praneeth   ',
//     email: '  pRan@gamil.com',
//     password: 'fjkdjf330eo'
// })

// me.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })



// const task = new Task({
//     description: 'Complete reading tb',
//     completed:false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })