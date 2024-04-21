const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let id = 0;

  const interval = setInterval(() => {
    const data = {
      id: id++,
      message: `Server time: ${new Date().toLocaleTimeString()}`,
    };
    res.write(`id: ${data.id}\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);

  req.on("close", () => {
    clearInterval(interval);
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
