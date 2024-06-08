import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {type:String,required:true},
        depoiment: {type:String, required:true},
        course:{type:String, required:true},
    },
    {timestamps:true}
)

const modelName = mongoose.models.User || mongoose.model("User",userSchema);

export default modelName;

