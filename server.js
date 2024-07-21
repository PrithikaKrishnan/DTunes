const express=require("express");
const cors=require("cors");
const path=require("path");
const app=express();
const port=3001;
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint to get the MP3 file
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'src', 'assets','Khairiyat.mp3');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
