import express from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (request, response) => {
  const buf = await fs.readFile("./pages/index.html");
  response.type("html");
  response.send(buf);
});

//första parametern är url, andra parametern är pathen där de statiska filerna ligger.
app.use("/static", express.static("./static"));
app.use('/pages', express.static('./pages'));
app.use('/js', express.static('./js'));
app.listen(3080);