import mongoose from 'mongoose';

const SubscribeStructure = mongoose.Schema(
    {
        email : String,

    }
);

export const SubscribeModel = mongoose.model('subscribe', SubscribeStructure);