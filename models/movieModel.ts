import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  streamingLink: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;