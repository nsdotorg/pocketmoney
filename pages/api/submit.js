import fs from "fs";
import path from "path";

// function to handle incoming POST request
export default function handler(req, res) {
  if (req.method === "POST") {
    const userData = req.body;
    const filePath = path.join(process.cwd(), "userData.json");

    fs.writeFileSync(filePath, JSON.stringify(userData));
    res.status(200).json({ message: "Form data saved successfully" });
  } else {
    res.status(405).end();
  }
}
