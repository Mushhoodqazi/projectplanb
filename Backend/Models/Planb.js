import mongoose from 'mongoose';

const PlanbStructure = mongoose.Schema(
    {
        UserName : String,
        Password : String

    }
);

export const Planbmodel = mongoose.model('Plan-badmins', PlanbStructure);