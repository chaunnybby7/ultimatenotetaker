//dependencies
const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

const readNotes = util.promisify(fs.readFile);
const writeNotes = util.promisify(fs.writeFile);

class SaveIt {
    write(note) {   
        return writeNotes('db/db.json', JSON.stringify(note));
    }
    read() {
        return readNotes('db/db.json', 'utf8');
    }
    retrieveNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    
    addnewNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Both title and text can not be blank');

        }
        //use UUID package to add unique IDs
        const newNote = { title, text, id: uuidv4() };
        //retrieve notes, add the new note, update notes
        return this.retriveNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updateNotes))
        .then(() => newNote);
    }
    //delete note function 
    deletedNote(id) {
        return this.retrieveNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.write(filteredNotes));
        }
    }

    module.exports = new SaveIt();