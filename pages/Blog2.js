import React from 'react';
import Blogpage from './Blogpage';

const Blog2 = () => {
  return (
    <div className="container mt-5">
    <header className="text-center mb-5">
      <h1>Chennai: The Gateway to South India</h1>
      <p>Explore the rich history, culture, and beautiful beaches of Chennai!</p>
    </header>

    {/* About Chennai */}
    <section className="mb-5">
      <h2>About Chennai</h2>
      <p>
        Chennai, formerly known as Madras, is the capital city of Tamil Nadu, located on the southeastern coast of India. It is a vibrant city known for its rich culture, historical landmarks, temples, and long stretches of pristine beaches.
      </p>
    </section>

    {/* Top Tourist Places */}
    <section className="mb-5">
      <h2>Top Tourist Places in Chennai</h2>
      <div className="row">
        {/* Marina Beach */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Marina+Beach"
              className="card-img-top"
              alt="Marina Beach"
            />
            <div className="card-body">
              <h5 className="card-title">Marina Beach</h5>
              <p className="card-text">
                Marina Beach is the longest urban beach in India and the second-longest in the world. It’s a popular spot for morning walks and evening leisure.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Kapaleeshwarar Temple */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Kapaleeshwarar+Temple"
              className="card-img-top"
              alt="Kapaleeshwarar Temple"
            />
            <div className="card-body">
              <h5 className="card-title">Kapaleeshwarar Temple</h5>
              <p className="card-text">
                This ancient Dravidian-style temple dedicated to Lord Shiva is located in Mylapore. It’s known for its beautiful architecture and serene environment.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Fort St. George */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://via.placeholder.com/300x200?text=Fort+St+George"
              className="card-img-top"
              alt="Fort St. George"
            />
            <div className="card-body">
              <h5 className="card-title">Fort St. George</h5>
              <p className="card-text">
                Fort St. George is a historical fort built by the British East India Company. It houses a museum and the St. Mary's Church, the oldest Anglican church in India.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Best Time to Visit */}
    <section className="mb-5">
      <h2>Best Time to Visit Chennai</h2>
      <p>
        The best time to visit Chennai is from **November to February**. During these months, the weather is cool and pleasant, which is ideal for sightseeing and enjoying the beaches. Avoid the summer months (March to June) as they can get quite hot.
      </p>
    </section>

    {/* Travel Tips */}
    <section className="mb-5">
      <h2>Travel Tips</h2>
      <ul>
        <li>Wear light, comfortable clothes, as Chennai can get hot, especially during summer.</li>
        <li>Make sure to stay hydrated and wear sunscreen, especially if you're visiting the beaches.</li>
        <li>Respect the local culture, especially in temples and religious places.</li>
        <li>Carry an umbrella or hat to protect yourself from the sun.</li>
      </ul>
    </section>

    {/* Nearby Attractions */}
    <section className="mb-5">
      <h2>Nearby Attractions</h2>
      <ul>
        <li><strong>San Thome Basilica</strong>: A historic church built over the tomb of St. Thomas, one of the twelve apostles of Jesus.</li>
        <li><strong>Government Museum</strong>: One of the oldest museums in India, housing a rich collection of archaeological, numismatic, and art exhibits.</li>
        <li><strong>Birla Planetarium</strong>: An astronomy museum and planetarium offering interactive exhibits and sky shows.</li>
      </ul>
    </section>

   </div>
  );
};

export default Blog2;