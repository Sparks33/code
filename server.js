const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const correctCode = 'MNQ NXNCOÇTX BXEB NGAMTNE T E E E I E';

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/check-code', (req, res) => {
  const { code } = req.body;
  if (code === correctCode) {
    res.json({ success: true, message: '!hjdh893847' });
  } else {
    res.json({
      success: false,
      redirect: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
