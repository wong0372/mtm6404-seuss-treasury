import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// create state to store the book detail
// get book id from url - useParams
function BookDetails() {
  const [book, setBook] = useState(null);
  const params = useParams();

  // fetch book details when the component loads
  useEffect(() => {
    fetch(`https://seussology.info/api/books/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // some book image link in API cannot display the image
        // here use diff image url for those special books
        if (
          data.title === "Did I Ever Tell You How Lucky You Are?" ||
          data.title === "You're Only Old Once!" ||
          data.title === "Oh, the Places You'll Go!"
        ) {
          let specialUrl;
          if (data.title === "Did I Ever Tell You How Lucky You Are?") {
            specialUrl =
              "https://m.media-amazon.com/images/I/51Ga5GuElyL._SL350_.jpg";
          } else if (data.title === "You're Only Old Once!") {
            specialUrl = "https://m.media-amazon.com/images/I/81N3RPv0MSL.jpg";
          } else if (data.title === "Oh, the Places You'll Go!") {
            specialUrl =
              "https://m.media-amazon.com/images/I/51QnuLIY2uL._SL350_.jpg";
          }

          setBook({
            ...data,
            cover_url: specialUrl,
          });
        } else {
          // for other books without problem, use api image link
          setBook({
            ...data,
            cover_url: `https://seussology.info/images/book-covers/${data.id}.jpg`,
          });
        }
      });
  }, [params.id]);

  // message when fetching book details
  if (!book) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {/* left part - book cover image */}
        <div className="col-md-4">
          <img
            src={book.cover_url}
            alt={book.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "500px", width: "auto" }}
            onError={(e) => {
              // for failed image
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x450/png?text=Image+unavailable";
            }}
          />
        </div>
        {/* right part - title and description */}
        <div className="col-md-8">
          <h1 className="mb-4 pt-sm-3">{book.title}</h1>
          <div className="card">
            <div className="card-body">
              <p style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
