import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

export default function NovelNote() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Library" element={<Library />} />
        <Route path="Library/new-book" element={<NewBook />} />
      </Routes>
      ;
    </div>
  );
}

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const recom = [
    "http://books.google.com/books/content?id=FjjCDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=MZMJEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=cyffaasy3xsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=rxEvDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  ];

  return (
    <div className="novelnote">
      <img id="nn-front-img" src="nn-front.png" alt="" />
      <h1 id="nn-head">Novel</h1>
      <h1
        style={{
          top: "195px",
          left: "625px",
          color: "red",
        }}
        id="nn-head"
      >
        Note
      </h1>
      <Link to="Library">
        <button id="nn-home-btn">Get Started</button>
      </Link>
      <div id="nn-navbar"></div>
      <div id="nn-navbar2"></div>
      <div id="nn-recomm-img">
        {recom.map((r, index) => {
          return (
            <div>
              <img
                style={{ height: "190px", width: "130px" }}
                id={`nn-recomm-img-shadow${index}`}
                src={r}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Library() {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [authors, setAuthors] = useState([]);
  const [image, setImage] = useState([]);

  const [Books, setBooks] = useState([
    {
      id: 2435536,
      shortdesc:
        "'So bold and so vulnerable at the same time. I don't know how she did it' - Phoebe Waller-Bridge Now with an introduction from Dolly Alderton, author of Everything I Know About Love, revealing how a new generation of women can take inspiration from Nora's sharp wit and wisdom about life.",
      author: "Nora Ephron",
    },

    {
      id: 553436,
      shortdesc:
        "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.",
      author: "J.K. Rowling",
    },

    {
      id: 8875633,
      shortdesc:
        "Voted America's Best-Loved Novel in PBS's The Great American Read Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred One of the most cherished stories of all time, To Kill a Mockingbird was voted one of the best novels of the twentieth century by librarians across the country.",
      author: "Harper Lee",
    },

    {
      id: 31278464,
      shortdesc:
        "#1 NEW YORK TIMES BESTSELLER • The thrilling history of the Targaryens comes to life in this masterly work, the inspiration for HBO’s Game of Thrones prequel series House of the Dragon “The thrill of Fire & Blood is the thrill of all Martin’s fantasy work: familiar myths debunked, the whole trope table flipped.",
      author: "George R.R.Martin",
    },
    {
      id: 3244251,
      shortdesc:
        "'Interesting and provocative... It gives you a sense of how briefly we've been on this Earth' Barack Obama. What makes us brilliant? What makes us deadly? What makes us Sapiens? Yuval Noah Harari challenges everything we know about being human. ",
      author: "Yuval Noah Harari",
    },
  ]);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState("0");

  const [isAdding, setIsAdding] = useState(false);

  const [Carousel, setCarousel] = useState([
    "http://books.google.com/books/content?id=pJjS9cKPr9oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=gebvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  ]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getData() {
      const q = query.toLowerCase().replace(" ", "+");

      // Fetch data from Google Books API
      const resBooks = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${q}`
      );
      const dataBooks = await resBooks.json();
      setData(dataBooks.items); // set data to state
    }
    getData();
  }, [query]);

  function handleNewBook() {
    if (data?.length > 0) {
      const book = data[0]; // Use the first book in the results

      const description = book.volumeInfo.description || "";
      const authors = book.volumeInfo.authors || [];

      // Create a new book object
      const id = crypto.randomUUID();
      const newBook = {
        id: id,
        desc: description,
        shortdesc:
          description.split(".")[0].length < 150
            ? (description || "").split(".")[0] +
              "." +
              (description || "").split(".")[1]
            : (description || "").split(".")[0],
        author: authors[0],
      };

      // Add the book to the array
      setCarousel((c) => [...c, book.volumeInfo.imageLinks?.thumbnail]);
      setBooks((prevBooks) => [...prevBooks, newBook]);
      setData("");
      setIsAdding(false);
    }
  }

  console.log(Carousel);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setActiveIndex(activeIndex);
  };

  return (
    <div className="nn-library">
      <div id="nn-navbar" style={{ position: "absolute", left: "60px" }}></div>
      <div id="nn-navbar2"></div>
      <div id="nn-lib-quote">
        <div id="nn-lib-quote">
          <h2
            style={{
              fontFamily: "Roboto Mono",
              fontWeight: "500",
              fontSize: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Keep the story going...
          </h2>
          <h3
            style={{
              width: "60rem",
              fontFamily: "itim",
              fontWeight: "400",
              fontSize: "1.8rem",
            }}
          >
            "Every book tells a story, and so does your reading journey. Log
            your books, track your progress, and let the adventure never end."
          </h3>
          {!isAdding && (
            <button
              style={{ position: "absolute", top: "100px", left: " 0px" }}
              onClick={() => setIsAdding(true)}
              id="nn-home-btn"
            >
              Add Books
            </button>
          )}
          {isAdding && (
            <div id="nn-book-input-block">
              <button
                style={{
                  boxShadow: "-10px 10px 15px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "red",
                }}
                onClick={handleNewBook}
                id="nn-lib-btn"
              >
                Add
              </button>
              <input
                style={{
                  textAlign: "center",
                  outline: " 0",
                  borderWidth: " 0 0 1px",
                  color: "#c8c5bc",
                  borderColor: "#c8c5bc",
                  fontFamily: "roboto mono",
                  marginLeft: "20px",
                }}
                placeholder="Enter Book Name"
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
              ></input>
            </div>
          )}
        </div>
        <div id="nn-book-details">
          <div
            style={{
              display: "flex",
              columnGap: "20px",
              width: "18vw",
              fontFamily: "roboto Mono",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "#303030",
              }}
            ></div>
            <h3>{Books[activeIndex]?.author}</h3>
          </div>
          <div style={{ fontFamily: "itim" }}>
            <p>{Books[activeIndex]?.shortdesc}.</p>
          </div>
        </div>
      </div>
      <div id="nn-carousel">
        <ImageCarousel
          Image={Carousel}
          getItemContent={(image, index) => ({
            src: image, // Image URL from the array
            alt: `Image ${index}`, // Generate alt text dynamically
            id: index, // Use index as a unique identifier
          })}
          slidesPerView={"5"}
          Imgwidth={"180px"}
          Imgheight={"270px"}
          slideShadow={"-20px 20px 15px rgb(0,0,0,0.3)"}
          SwiperSlideWidth={"27rem"}
          SwiperSlideHeight={"42rem"}
          containerMaxWidth={"1450px"}
          slideImgBorderLeft={"4px solid #333333"}
          slideImgBorderRight={"2px solid wheat"}
          slideRotate={0}
          slideStretch={0}
          slideDepth={80}
          slideModifier={2.5}
          handleSlideChange={handleSlideChange}
          initialSlide={"0"}
        />
      </div>
    </div>
  );
}

function NewBook() {
  const location = useLocation();
  const { Books, Covers, image } = location.state || {};

  return <div id="nn-new-book"></div>;
}
