import NotesAPI from './NotesAPI.js';

NotesAPI.saveNote({
  title: 'hello',
  body: 'today i should do this',
});

console.log(NotesAPI.getAllNotes())
