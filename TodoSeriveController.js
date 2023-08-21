const { RouteList } = require("./RoutesList");

const TodoService = require("./todoServices");

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
    res.json({ data: notes, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.createNote = async (req, res) => {
  try {
    //console.log("body :", req);

    //const totalCount = await TodoService.TodoService.countDocuments();
    const body = req.body;
    const noteObj = {
      //id: totalCount, // TodoService.TodoService.length + 1,
      id: 1,
      body: "Gururaj",
      updated: Date.now(),
      created: Date.now(),
    };

    console.log("body noteObj :", noteObj);
    const note = await TodoService.createNote(noteObj);
    res.json({ data: note, status: "success" });
  } catch (error) {
    console.log("error create", error);
    res.status(500).json({ error: error });
  }
};

exports.getNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await TodoService.getNote(id);
    res.json({ data: note, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const note = await TodoService.updateNote(id, body.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await TodoService.deleteNote(id);
    res.json({ data: note, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
