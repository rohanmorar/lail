console.log("hello from server");
import express from "express";
import sqlite3 from "sqlite3";
import { OAuth2Client } from "google-auth-library";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./users.db");
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  name TEXT
)`);

app.post("/api/login", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const name = payload.name;

    db.run(`INSERT OR IGNORE INTO users (email, name) VALUES (?, ?)`, [
      email,
      name,
    ]);

    res.json({ user: { email, name } });
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
