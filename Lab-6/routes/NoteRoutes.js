const Note = require('../models/Note.js');
const express = require('express');
const router = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    
    //TODO - Write your code here to save the note
    try{
        const {noteTitle, noteDescription, priority} = req.body;

        const note = new Note({
            noteTitle,
            noteDescription,
            priority
        });

        await note.save();

        res.status(201).json({message: 'Note created successfully', note_id: note._id});
    } catch(err){
        res.status(500).json({message: 'Server error'});
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    
    //TODO - Write your code here to returns all note
    try{
        const note = await Note.find();
        res.status(200).json(note);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
   
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await Note.findById(req.params.noteId);

        if(!note){
            return res.status(404).json({message: 'Note not found'});
        }

        res.status(200).json(note);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    
    //TODO - Write your code here to update the note using noteid
    try{
        const note = await Note.findById(req.params.noteId);

        if(!note){
            return res.status(404).json({message: 'Note not found'});
        }

        note.noteTitle = req.body.noteTitle || note.noteTitle;
        note.noteDescription = req.body.noteDescription || note.noteDescription;
        note.priority = req.body.priority || note.priority;
        note.dateAdded = req.body.dateAdded || note.dateAdded
        note.dateUpdated = new Date();

        await note.save();

        res.status(200).json({message: 'Note updated successfully', note});
    } catch{
        res.status(500).json({message: 'Server error'});
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    
    //TODO - Write your code here to delete the note using noteid
    try{
    
    noteId = req.params.noteId;

    const note = await Note.findByIdAndDelete(noteId);

    if(!note){
        return res.status(404).json({message: 'Note not found'});
    }

    res.status(200).json({message: 'Note deleted successfully'});
    } catch(err){
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;
