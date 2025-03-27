import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // backup quotes in case the api doesn't work
  const fallbackQuotes = [
    {
      id: 1,
      quote:
        "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
      book: "Happy Birthday to You!",
    },
    {
      id: 2,
      quote:
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      book: "I Can Read With My Eyes Shut!",
    },
    {
      id: 3,
      quote:
        "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
      book: "The Lorax",
    },
    {
      id: 4,
      quote:
        "Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!",
      book: "Oh, the Thinks You Can Think!",
    },
    {
      id: 5,
      quote:
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      book: "Oh, the Places You'll Go!",
    },
    {
      id: 6,
      quote:
        "From there to here, from here to there, funny things are everywhere.",
      book: "One Fish, Two Fish, Red Fish, Blue Fish",
    },
    {
      id: 7,
      quote: "A person's a person, no matter how small.",
      book: "Horton Hears a Who!",
    },
    {
      id: 8,
      quote: "Don't cry because it's over. Smile because it happened.",
      book: "Dr. Seuss Quote",
    },
    {
      id: 9,
      quote: "Why fit in when you were born to stand out?",
      book: "Dr. Seuss Quote",
    },
    {
      id: 10,
      quote:
        "Sometimes the questions are complicated and the answers are simple.",
      book: "Dr. Seuss Quote",
    },
  ];

  // if data isn't an array, use backup quotes
  function formatQuotes(data) {
    if (!Array.isArray(data)) {
      console.log("API data isn't right, using backup quotes");
      return fallbackQuotes;
    }

    // go through each quote and fix it if needed
    return data.map((item, index) => {
      return {
        id: item.id || index + 1,
        quote: item.quote || item.text || item.title || "Quote not available",
        book: item.book || item.source || item.from || "Dr. Seuss",
      };
    });
  }

  // get quotes from the API when the page loads
  useEffect(() => {
    setLoading(true);

    // fetch the quotes from the API
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => {
        // check if the response is ok
        if (!res.ok) {
          throw new Error("API not working");
        }
        return res.json();
      })
      .then((data) => {
        // got quotes from API, now fix them if needed
        console.log("Got quotes from API!");
        let goodQuotes = formatQuotes(data);
        setQuotes(goodQuotes);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        // if the API fails, use the backup quotes
        console.log("API error:", error);
        setQuotes(fallbackQuotes);
        setError(
          "Couldn't get quotes from the API right now. Showing some backup quotes instead."
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h1 className="mb-4 text-center">Dr. Seuss Quotes</h1>
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <p>Loading quotes...</p>
        </div>
      </div>
    );
  }

  // show the quotes
  return (
    <div className="container">
      <h1 className="mb-4 text-center">Dr. Seuss Quotes</h1>

      {error && <div className="alert alert-info mb-4">{error}</div>}

      <div className="row">
        {quotes.map((quote, index) => (
          <div className="col-12 mb-4" key={quote.id || index}>
            <div className="card">
              <div className="card-body">
                <blockquote className="mb-0">
                  <p className="quote-text">
                    {typeof quote.quote === "string"
                      ? quote.quote
                      : "Quote not available"}
                  </p>
                  <footer className="blockquote-footer">
                    From{" "}
                    <cite title={quote.book}>
                      {typeof quote.book === "string"
                        ? quote.book
                        : "Dr. Seuss"}
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
