import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example route
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
