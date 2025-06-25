import { Router } from "express";
import movies from "../movies.json" with { type: "json" };

const router = Router();

router.get("/", (req, res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

router.get("/:id", (req, res) => {  
    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
})