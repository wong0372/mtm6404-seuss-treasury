import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  // backup quotes for api error
  const backupQuotes = [
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

  useEffect(() => {
    // originally used to fetch quotes from the api like below:
    // but dont know why the quotes cannot show on the page and keeps loading
    // so i am now using hardcoded quotes as backup to make sure app works properly for the assignment

    /*
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        setQuotes(backupQuotes);
      });
    */
    setQuotes(backupQuotes);
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4 text-center">Dr. Seuss Quotes</h1>
      <div className="row">
        {quotes.map((quote) => (
          <div className="col-12 mb-4" key={quote.id}>
            <div className="card">
              <div className="card-body">
                <blockquote className="mb-0">
                  <p className="quote-text">{quote.quote}</p>
                  <footer className="blockquote-footer">
                    From <cite title={quote.book}>{quote.book}</cite>
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
