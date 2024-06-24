
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Favorites = require("./backend/models/schema"); 

const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://admin:admin1234@firstcluster.cbhgtbm.mongodb.net/Favorite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
}));


app.post("/favorites", (req, res) => {
  const { title, publisher } = req.body;

  const newFavorites = new Favorites({
    title: title,
    publisher: publisher,
  });

  newFavorites.save()
    .then(favorites => {
      console.log("Favorites saved successfully:", favorites);
      res.status(200).json(favorites);
    })
    .catch(err => {
      console.error("Error saving favorites:", err);
      res.status(500).send("Error saving favorites");
    });
});


app.get("/favorites", (req, res) => {
  Favorites.find({})
    .then(favorites => {
      res.status(200).json(favorites);
    })
    .catch(err => {
      console.error("Error fetching favorites:", err);
      res.status(500).send("Error fetching favorites");
    });
});

app.delete("/favorites/:id", (req, res) => {
  const { id } = req.params;

  Favorites.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Favorites deleted successfully" });
    })
    .catch(err => {
      console.error("Error deleting favorites:", err);
      res.status(500).send("Error deleting favorites");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});