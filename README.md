# Library Book Management System

This project is a backend application for a Library Book Management System. It provides APIs for adding, updating, deleting, and searching books in the library database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

2. Install dependencies:

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Add the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
  ```

4. Start the server:

5. The server will start running at `http://localhost:3000`.

## API Endpoints

- **POST /api/books/add**: Add a new book to the library.
- **PUT /api/books/update/:id**: Update an existing book by ID.
- **DELETE /api/books/delete/:id**: Delete a book by ID.
- **GET /api/books/search**: Search for books based on query parameters.

## Contributors

- [Your Name](link-to-your-github-profile)

## License

This project is licensed under the [MIT License](link-to-license-file).
