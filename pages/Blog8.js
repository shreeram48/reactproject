import React from 'react';
import Blogpage from './Blogpage';

const Blog8 = () => {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Jammu and Kashmir Tourism</h1>
        <p>Discover the vibrant culture, history, and beauty of snows, India's beautiful place!</p>
      </header>

      {/* About Jammu Kashmir*/}
      <section className="mb-5">
        <h2>About Jammu Kashmir</h2>
        <p>
        Jammu kashmir is a Union Territory of Jammu & Kashmir: Facts at a GlanceJammu and Kashmir is a union territory of India that's known for its stunning landscapes.
        </p>
      </section>

      {/* Top Tourist Places */}
      <section className="mb-5">
        <h2>Top Tourist Places in Jammu kashmir</h2>
        <div className="row">
          {/* Srinagar*/}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Gateway+of+India"
                className="card-img-top"
                alt="Gateway of India"
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar</h5>
                <p className="card-text">
                A city on the banks of the Jhelum river.Home to Dal Lake, Mughal gardens, and orchards.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Gulmarg */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Marine+Drive"
                className="card-img-top"
                alt="Gulmarg"
              />
              <div className="card-body">
                <h5 className="card-title">Gulmarg</h5>
                <p className="card-text">
                A winter wonderland in the White Hills of Kashmir.Home to the world-famous Gulmarg Gondola Ride.
                </p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Vaishno Devi */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/300x200?text=Elephanta+Caves"
                className="card-img-top"
                alt="Vaishno Devi"
              />
              <div className="card-body">
                <h5 className="card-title">Elephanta Caves</h5>
                <p className="card-text">
                Home to the holy shrine of Maa Vaishno Devi.A pilgrimage town in Jammu's Reasi district.
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
          The best time to visit Jammu Kashmir depends on the experiences you want. 
        </p>
      </section>

      {/* Travel Tips */}
      <section className="mb-5">
        <h2>Travel Tips</h2>
        <ul>
          <li>Wear comfortable clothing and footwear as you will be walking a lot while exploring the city.</li>
          <li>Be cautious of the traffic in Jammu Kshmir, as it can be chaotic at times, especially during rush hours.</li>
          <li>Always carry sweater and stay warmed, as Jammu Kshmir's climate can be cold and spring.</li>
          <li>Try local street food like vada pav, pav bhaji, and bhel puri for an authentic jammu Kashmir experience.</li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="mb-5">
        <h2>Nearby Attractions</h2>
        <ul>
          <li><strong>Patnitop  (CST):</strong> A picturesque hill resort in Jammu and Kashmir's Udhampur District.</li>
          <li><strong>Pahalgam:</strong> A base camp for the Amarnath Yatra.</li>
          <li><strong>Haji Ali Dargah:</strong> A famous mosque and tomb situated in the middle of the Arabian Sea, accessible by a causeway.</li>
        </ul>
      </section>
</div>

  );
};

export default Blog8;