const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: {type: String, required: true},
    noteDescription: {type: String, required: true},
    priority: {type: String, enum: ['High', 'Medium', 'Low'], required: true},
    dateAdded: {type: Date, default: Date.now},
    dateUpdated: {type: Date, default: Date.now}
}, {collection: 'Lab-6'});

module.exports = mongoose.model('Note', noteSchema);

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated