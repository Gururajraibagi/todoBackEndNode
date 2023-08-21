const TodoModel = require("./TodoModel");

exports.getNotes = async () => {
  return await TodoModel.find();
};
exports.createNote = async (note) => {
  console.log("create note", note);
  return await TodoModel.create(note);
};

exports.getNote = async (id) => {
  return await TodoModel.findById(id);
};

exports.updateNote = async (id, note) => {
  return await TodoModel.findByIdAndUpdate(id, note);
};

exports.deleteNote = async (id) => {
  return await TodoModel.findByIdAndDelete(id);
};
