const express = require('express');
const crypto = require('node:crypto');
const movies = require('./movies.json');

const app = express();
app.disable('x-powered-by'); // Desactiva el header x-powered-by

app.use(express.json()); 

// Todos los recursos que sean movies se identifican con /movies
app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        return res.json(filteredMovies);
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp 
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ error: 'Movie not found' });
})

app.post('/movies', (req, res) => {
    const { title, genre, year, director, duration, rate, poster  } = req.body;

    const newMovie = {
        id: crypto.randomUUID(),
        title,
        genre: Array.isArray(genre) ? genre : [genre],
        year,
        director,
        duration,
        rate,
        poster
    };

    movies.push(newMovie)
})

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})