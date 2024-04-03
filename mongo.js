const mongoose = require('mongoose')


const url = `mongodb+srv://lodiajames:yalatif129@cluster0.wfz8kei.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)



Note.find({}).then(result =>{
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})