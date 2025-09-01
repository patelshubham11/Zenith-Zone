const express = require("express");
const path = require("path");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
const DATA_FILE = path.join(__dirname, "members.json");

function readMembers() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function writeMembers(members) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2));
}

app.get("/api/members", (req, res) => {
  res.json(readMembers());
});

app.post("/api/members", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ msg: "Please include name and email" });

  const newMember = { id: uuid(), name, email };
  const members = readMembers();
  members.push(newMember);
  writeMembers(members);

  res.json(newMember);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));