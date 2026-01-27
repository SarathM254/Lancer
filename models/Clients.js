import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    name: String,
    email: String,
    organisation: String,
    links: {
        profileUrl: String,
        linkedin: String,
        site: String
    },
    details: String,
    plan: String,
    mails: [
        {
            name: String,
            profileUrl: String,
            subject: String,
            time: Date
        }
    ],
    notes: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
});

export const Client = mongoose.model('Client', ClientSchema);
 // collection name will be clients in the database (automatically pluralized)

//Database name will be specified by the connection string in server.jsmodels/Clients.js


/*

validations added

import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    organisation: {
        type: String,
        trim: true,
        maxlength: 200,
        default: null
    },
    links: {
        profileUrl: {
            type: String,
            default: null
        },
        linkedin: {
            type: String,
            match: /^https?:\/\/(www\.)?(linkedin\.com|lnkd\.in)/i,
            maxlength: 500
        },
        site: {
            type: String,
            match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
            maxlength: 500
        }
    },
    details: {
        type: String,
        maxlength: 5000,
        default: null
    },
    plan: {
        type: String,
        maxlength: 10000,
        default: null
    },
    mails: [
        {
            name: String,
            profileUrl: String,
            subject: {
                type: String,
                required: true
            },
            time: {
                type: Date,
                required: true
            }
        }
    ],
    notes: {
        type: mongoose.Schema.Types.Mixed,
        default: null
    }
}, {
    timestamps: true
});

export const Client = mongoose.model('Client', ClientSchema);


*/



