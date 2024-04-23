const translate = require("free-google-translator-api");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 1234;

app.use(cors());

app.options("*", cors());

app.get("/", async (req, res) => {
  try {
    const { from = "auto", to = "vi", text = "Hello world" } = req.query;

    const data = await translate(text, from, to);

    console.log("🚀 ~ app.get ~ data:", data);
    res.status(200).json({
      text: data,
    });
  } catch (error) {
    console.log("🚀 ~ app.get ~ error:", error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
