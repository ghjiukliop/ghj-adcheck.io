const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dữ liệu giả định
let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'Brave New World', author: 'Aldous Huxley' },
  { id: 3, title: 'Fahrenheit 451', author: 'Ray Bradbury' }
];

// Lấy danh sách tất cả các cuốn sách
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Lấy thông tin chi tiết của một cuốn sách dựa trên ID
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// Thêm một cuốn sách mới
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Cập nhật thông tin một cuốn sách dựa trên ID
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  Object.assign(book, req.body);
  res.json(book);
});

// Xóa một cuốn sách dựa trên ID
app.delete('/api/books/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
