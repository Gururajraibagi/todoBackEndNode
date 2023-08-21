const { RouteList } = require("./RoutesList");

const TodoService = require("./todoServices");
const Counter = require("./CounterModel"); // Import the Counter model

exports.getRoutes = (req, res) => {
  try {
    res.json({ data: RouteList, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await TodoService.getNotes();
    //    res.json({ data: notes, status: "success" });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createNote = async (req, res) => {
  try {
    //console.log("body :", req);

    //const totalCount = await TodoService.TodoService.countDocuments();
    const body = req.body;

    const sequenceDoc = await Counter.findByIdAndUpdate(
      { _id: "123" }, // Use a specific _id for the sequence
      { $inc: { sequence_value: 1 } }, // Increment the sequence value
      { new: true, upsert: true } // Create if not exists
    );

    const noteObj = {
      //id: totalCount, // TodoService.TodoService.length + 1,
      id: sequenceDoc.sequence_value,
      body: body.body,
      updated: Date.now(),
      created: Date.now(),
    };

    console.log("body noteObj :", noteObj);
    const note = await TodoService.createNote(noteObj);
    //res.json({ data: note, status: "success" });
    res.json(note);
  } catch (error) {
    console.log("error create", error);
    res.status(500).json({ error: error });
  }
};

exports.getNote = async (req, res) => {
  try {
    console.log("getnote", req.params.id);
    const id = req.params.id;
    const note = await TodoService.getNote(id);
    res.json(note);

    //    res.json({ data: note, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const note = await TodoService.updateNote(id, body.body);
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await TodoService.deleteNote(id);
    //    res.json({ data: note, status: "success" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
