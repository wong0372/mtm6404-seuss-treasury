import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => {
        // process book data
        const processedBooks = data.map((book) => {
          // for specific book which have problem with image
          if (
            book.title === "Did I Ever Tell You How Lucky You Are?" ||
            book.title === "You're Only Old Once!" ||
            book.title === "Oh, the Places You'll Go!"
          ) {
            let specialUrl;
            if (book.title === "Did I Ever Tell You How Lucky You Are?") {
              specialUrl =
                "https://m.media-amazon.com/images/I/51Ga5GuElyL._SL350_.jpg";
            } else if (book.title === "You're Only Old Once!") {
              specialUrl =
                "https://m.media-amazon.com/images/I/81N3RPv0MSL.jpg";
            } else if (book.title === "Oh, the Places You'll Go!") {
              specialUrl =
                "https://m.media-amazon.com/images/I/51QnuLIY2uL._SL350_.jpg";
            }
            return {
              ...book,
              cover_url: specialUrl,
            };
          }
          // for other books without problem, use api image link
          return {
            ...book,
            cover_url: `https://seussology.info/images/book-covers/${book.id}.jpg`,
          };
        });
        setBooks(processedBooks);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 text-center">Seuss Treasury</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <Link to={`/books/${book.id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img
                  src={book.cover_url}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "350px",
                    padding: "20px",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x450/png?text=Image+unavailable";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark text-center">
                    {book.title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
