import express from 'express';
import { getAllMovies, searchMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController';

const router = express.Router();

router.get('/', getAllMovies);
router.get('/search', searchMovies);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;