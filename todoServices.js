const TodoModel = require("./TodoModel");

exports.getNotes = async () => {
  return await TodoModel.find();
};
exports.createNote = async (note) => {
  console.log("create note", note);
  return await TodoModel.create(note);
};

exports.getNote = async (id) => {
  //  return await TodoModel.findById(id);
  return await TodoModel.findOne({ id });
};

exports.updateNote = async (id, note) => {
  //  return await TodoModel.findByIdAndUpdate(id, note);
  const existingNote = await TodoModel.findOne({ id });
  existingNote.body = note; //body.body;
  existingNote.updated = Date.now();
  return await existingNote.save();
  //return await TodoModel.findOneAndUpdate(id, note);
};

exports.deleteNote = async (id) => {
  return await TodoModel.findOneAndDelete({ id });
};
