const mongoose = require("mongoose");

const uri =
  "mongodb+srv://gururaj:cBgwXVXdmElUhTQo@cluster0.hjh6hx2.mongodb.net/";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema({
  id: Number,
  body: String,
  updated: Date,
  created: Date,
});

const Todo = mongoose.model("todo", todoSchema);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

db.once("open", () => {
  console.log("MongoDB connection is open");
});
