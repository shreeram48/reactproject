import React from 'react';
import Blogpage from './Blogpage';

const Blog7 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Mumbai Tourism</h1>
        <p>Discover the vibrant culture, history, and beauty of Mumbai, India's financial capital!</p>
      </header>

      {/* About Mumbai */}
      <section className="mb-5">
        <h2>About Mumbai</h2>
        <p>
          Mumbai, also known as Bombay, is the capital city of the Indian state of Maharashtra. It is India's financial, commercial, and entertainment hub, known for its vibrant lifestyle, Bollywood industry, and iconic landmarks like the Gateway of India, Marine Drive, and the Elephanta Caves. With its diverse culture, Mumbai offers an exciting mix of historical sites, modern infrastructure, and lively streets.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Mumbai</h2>
        <div className="row">
          {/* Gateway of India */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Gateway+of+India"
                className="card-img-top"
                alt="Gateway of India"
              />
              <div className="card-body">
                <h5 className="card-title">Gateway of India</h5>
                <p className="card-text">
                  The Gateway of India is an iconic archway and one of Mumbai's most famous landmarks. It was built to commemorate the visit of King George V and Queen Mary in 1911. It is a must-visit for tourists and offers stunning views of the Arabian Sea.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Marine Drive */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Marine+Drive"
                className="card-img-top"
                alt="Marine Drive"
              />
              <div className="card-body">
                <h5 className="card-title">Marine Drive</h5>
                <p className="card-text">
                  Marine Drive is a scenic promenade that stretches along the Arabian Sea, offering breathtaking views of the sunset. It is known for its art deco buildings and is also known as the "Queen's Necklace" because of the streetlights that form a glowing necklace at night.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Elephanta Caves */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Elephanta+Caves"
                className="card-img-top"
                alt="Elephanta Caves"
              />
              <div className="card-body">
                <h5 className="card-title">Elephanta Caves</h5>
                <p className="card-text">
                  Elephanta Caves, located on an island off the coast of Mumbai, are famous for their rock-cut temples and sculptures dedicated to Lord Shiva. These caves date back to the 5th century and are a UNESCO World Heritage site.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-5">
        <h2>Best Time to Visit Mumbai</h2>
        <p>
          The best time to visit Mumbai is from **November to February**, during the cooler months of winter when the weather is pleasant for sightseeing. The monsoon season (June to September) brings heavy rains, making outdoor activities difficult. Summers (March to May) can be quite hot and humid.
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Wear comfortable clothing and footwear as you will be walking a lot while exploring the city.</li>
          <li>Be cautious of the traffic in Mumbai, as it can be chaotic at times, especially during rush hours.</li>
          <li>Always carry bottled water and stay hydrated, as Mumbai’s climate can be hot and humid.</li>
          <li>Try local street food like vada pav, pav bhaji, and bhel puri for an authentic Mumbai experience.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Chhatrapati Shivaji Maharaj Terminus (CST):</strong> A UNESCO World Heritage site and a beautiful example of Victorian Gothic architecture in Mumbai.</li>
          <li><strong>Juhu Beach:</strong> A popular beach in Mumbai known for its lively atmosphere and street food stalls.</li>
          <li><strong>Haji Ali Dargah:</strong> A famous mosque and tomb situated in the middle of the Arabian Sea, accessible by a causeway.</li>
        </ul>
      </section>
</div>
  );
};

export default Blog7;