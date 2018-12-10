const express = require('express');
const PORT = 4000;
const controller = require('./controllers/mainController')

const app = express();

app.use(express.json());

app.get('/api/songs', controller.getSong)

app.post('/api/rate', controller.rateSong)

app.put('/api/change', controller.changeRating)

app.delete('/api/delete/:track', controller.delete) //use req.params. to call

// app.put('/api/newsong', controller.addSong)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))