import React from 'react';
import Blogpage from './Blogpage';

const Blog3 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Delhi: The Heart of India</h1>
        <p>Discover the vibrant culture, history, and beauty of Delhi!</p>
      </header>

      {/* About Delhi */}
      <section className="mb-5">
        <h2>About Delhi</h2>
        <p>
          Delhi, the capital of India, is a city rich in history, culture, and modernity. It is a blend of ancient monuments, bustling markets, and impressive modern architecture. From historical landmarks to cultural festivals, Delhi offers something for every traveler.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Delhi</h2>
        <div className="row">
          {/* Red Fort */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Red+Fort"
                className="card-img-top"
                alt="Red Fort"
              />
              <div className="card-body">
                <h5 className="card-title">Red Fort</h5>
                <p className="card-text">
                  The Red Fort, a UNESCO World Heritage site, is an iconic symbol of India's Mughal era. It is known for its massive red sandstone walls and stunning architecture.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Qutub Minar */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Qutub+Minar"
                className="card-img-top"
                alt="Qutub Minar"
              />
              <div className="card-body">
                <h5 className="card-title">Qutub Minar</h5>
                <p className="card-text">
                  Qutub Minar is the tallest brick minaret in the world and a masterpiece of Indo-Islamic Afghan architecture. It stands as a symbol of Delhi's rich history.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* India Gate */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=India+Gate"
                className="card-img-top"
                alt="India Gate"
              />
              <div className="card-body">
                <h5 className="card-title">India Gate</h5>
                <p className="card-text">
                  India Gate is a war memorial built in honor of soldiers who died during World War I. It’s a major landmark and a popular picnic spot in Delhi.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Delhi</h2>
        <p>
          The best time to visit Delhi is between **October and March**. During these months, the weather is pleasant and ideal for sightseeing, as Delhi experiences cold winters and mild temperatures.
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Carry comfortable footwear as you'll be doing a lot of walking, especially while exploring historical sites.</li>
          <li>Delhi can be hot during the summer (April to June), so ensure you stay hydrated and wear sunscreen.</li>
          <li>Respect the local culture, especially when visiting temples and monuments.</li>
          <li>Use public transport (like the metro) to avoid heavy traffic and explore the city efficiently.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Lotus Temple</strong>: A beautiful Bahá'í House of Worship known for its lotus-shaped architecture.</li>
          <li><strong>Humayun's Tomb</strong>: A UNESCO World Heritage site and the tomb of Mughal Emperor Humayun, showcasing stunning Mughal architecture.</li>
          <li><strong>Akshardham Temple</strong>: A massive Hindu temple complex featuring cultural exhibitions, gardens, and an impressive central monument.</li>
        </ul>
      </section>
</div>
  );
};

export default Blog3;