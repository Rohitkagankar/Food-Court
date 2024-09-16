import mongoose  from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect(`mongodb+srv://rohitkagankar:UiVMVq6CkFgXKqyq@cluster0.3dzrg.mongodb.net/Food-Court`)
    .then(console.log("DB Connected")
    )
}