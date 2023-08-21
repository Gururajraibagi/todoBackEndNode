const express = require("express");
const app = express();
const PORT = 3000;
const { RouteList } = require("./RoutesList");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  getRoutes,
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
} = require("./TodoSeriveController");

const uri = "mongodb+srv://gururaj:@cluster0.hjh6hx2.mongodb.net/todo";

app.use(cors());
app.use(express.json());
Note = [{ id: 1, body: "first one", updated: Date.now(), created: Date.now() }];
console.log("le im printing", Note[0].body);

/*     path('',views.getRoutes,name='routes'),
    path('notes/',views.getNotes,name='notes'),
    path('notes/create',views.createNote,name='create-note'),
    path('notes/<str:pk>/update',views.updateNote,name='update-note'),
    path('notes/<str:pk>/delete',views.deleteNote,name='delete-note'),
    path('notes/<str:pk>',views.getNote,name='note'),
 */

const router = express.Router();

router.route("/routes").get(getRoutes);
router.route("/").get(getNotes);
router.route("/create").post(createNote);
//router.route("/notes/create").post(createNote);
router.route("/:id").get(getNote);
router.route("/:id/update").put(updateNote);
router.route("/:id/delete").delete(deleteNote);

app.use("/api/notes", router);
/* app.get("", (req, res) => {
  routes = RouteList;
  res.send(routes);
}); */
/* 
//Getall notes
app.get("/notes", (req, res) => {
  res.send(Note);
});

//Get single note
app.get("/note/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const notes = Note.find((val) => val.id === id);
  res.send(notes);
});

//Create a note
app.post("/notes/create", (req, res) => {
  const data = req.body;
  const note = {
    id: Note.length + 1,
    body: data.body,
    updated: Date.now(),
    created: Date.now(),
  };
  console.log("data", data.body);
  Note.push(note);
  res.send(Note);
});

//Update a note
app.put("/notes/:id/update", (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  console.log("id received =", id);
  const index = Note.findIndex((note) => note.id === id);
  console.log("index", index);
  Note[index].body = data.body;
  Note[index].updated = Date.now();
  res.send(Note);
});
``;

//Delete a note
app.delete("/notes/:id/delete", (req, res) => {
  console.log("Hit delete");
  const id = parseInt(req.params.id);

  Note = Note.filter((note) => note.id != id);

  res.send(Note);
}); */

app.listen(PORT, () => {
  console.log("server is running on port updated", PORT);
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* const http = require("http");
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const hostname = "127.0.0.1";
const port = 3000;
const callMongo = async () => {};
client.connect();
listDatabases(client).then((res) => console.log(res));
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");x  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */
