const express = require('express')
const app = express()

require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ', port)
})

//Middle ware or Maintanence
// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are not allowed')
//     } else {
//         next()
//     }
// })


// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Come back later')
// })


// const jwt = require('jsonwebtoken')

// const func = async () => {
//     const token = jwt.sign({ id: 'fkdjfkjsjs'}, 'nodejscourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'nodejscourse')
//     console.log(data)
// }

// func()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     const user = await User.findById('6191eed1863cddba7c8b722e')
//     await user.populate('tasks')
//     console.log(user.tasks)

// }



// Multer
// const multer = require('multer')
// const { rawListeners } = require('./models/task')
// const upload = multer({
//     dest : 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })