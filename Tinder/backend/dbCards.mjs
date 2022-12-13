import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
        f_name:String,
        l_name:String,
        num:String,
        username:String,
        pass:String,
        email:String,
        d_name:String,
        imageUrl:String
})

export default mongoose.model("cards", cardSchema);