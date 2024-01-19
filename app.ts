import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movie-lobby', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/movies', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});