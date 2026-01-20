import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    name: String,
    links: {
        email: String,
        linkedin: String
    },
    profileUrl: String,
    details: String,
    plan: String,
    mails: [
        {
            subject: String,
            time: String
        }
    ],
    notes: String
});

export const Client = mongoose.model('Client', ClientSchema); // collection name will be clients in the database (automatically pluralized)

//Database name will be specified by the connection string in server.jsmodels/Clients.js